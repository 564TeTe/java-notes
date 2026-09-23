(function (global) {
    'use strict';

    const ANSWER = '.study-answer';
    const TERM = '[data-glossary-term]';
    const SKIP = 'pre,code,a,button,input,textarea,select,option,label,summary,svg,script,style,noscript,template,iframe,object,embed,' +
        '[contenteditable],[role="button"],[role="link"],[role="tab"],[role="checkbox"],[role="menuitem"],[data-glossary-term],' +
        '.study-ratings,.study-card-source,.study-linked';
    const BLOCK_TAGS = new Set(['P', 'DIV', 'SECTION', 'ARTICLE', 'HEADER', 'FOOTER', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6',
        'LI', 'UL', 'OL', 'DL', 'DT', 'DD', 'TABLE', 'TR', 'TD', 'TH', 'BLOCKQUOTE', 'PRE', 'BR', 'HR']);
    const POPUP_ID = 'glossary-term-popover';
    let index, container, observer, popup, popupTitle, popupDefinition, closeButton;
    let activeTrigger = null, frame = 0;
    const pending = new Set();
    const listeners = [];

    function listen(target, type, handler, options) {
        target.addEventListener(type, handler, options);
        listeners.push(() => target.removeEventListener(type, handler, options));
    }

    function close(restoreFocus = true) {
        const previous = activeTrigger;
        activeTrigger = null;
        if (popup) popup.hidden = true;
        if (previous) previous.setAttribute('aria-expanded', 'false');
        if (restoreFocus && previous && previous.isConnected && previous.getClientRects().length) {
            previous.focus({ preventScroll: true });
        }
    }

    function activeIsVisible() {
        return activeTrigger && container.contains(activeTrigger) &&
            !activeTrigger.closest('.collapsed,[hidden]') && activeTrigger.getClientRects().length;
    }

    function positionPopup() {
        if (!activeTrigger) return;
        if (!activeIsVisible()) { close(false); return; }
        const anchor = activeTrigger.getBoundingClientRect();
        const visual = global.visualViewport;
        const viewLeft = visual ? visual.offsetLeft : 0;
        const viewTop = visual ? visual.offsetTop : 0;
        const width = visual ? visual.width : document.documentElement.clientWidth || global.innerWidth;
        const height = visual ? visual.height : global.innerHeight;
        const gap = 10;
        popup.style.maxHeight = Math.max(40, height - gap * 2) + 'px';
        popup.style.maxWidth = Math.max(40, width - gap * 2) + 'px';
        const rect = popup.getBoundingClientRect();
        const left = Math.min(Math.max(viewLeft + gap, anchor.left), viewLeft + width - rect.width - gap);
        const below = anchor.bottom + gap;
        const preferredTop = below + rect.height <= viewTop + height - gap ? below : anchor.top - rect.height - gap;
        const top = Math.max(viewTop + gap, Math.min(preferredTop, viewTop + height - rect.height - gap));
        popup.style.left = left + 'px';
        popup.style.top = top + 'px';
    }

    function open(trigger) {
        const term = index.get(trigger.getAttribute('data-glossary-term'));
        if (!term) return;
        if (activeTrigger === trigger) { close(); return; }
        close(false);
        activeTrigger = trigger;
        popupTitle.textContent = term.term;
        popupDefinition.textContent = term.definition;
        trigger.setAttribute('aria-expanded', 'true');
        popup.hidden = false;
        positionPopup();
        if (!popup.hidden) popup.focus({ preventScroll: true });
    }

    function edgeCharacter(node, backwards) {
        if (BLOCK_TAGS.has(node.tagName)) return '';
        if (node.nodeType === 3) {
            const text = node.nodeValue;
            return text ? (backwards ? text.slice(-1) : text[0]) : null;
        }
        const direction = backwards ? 'previousSibling' : 'nextSibling';
        for (let child = backwards ? node.lastChild : node.firstChild; child; child = child[direction]) {
            const edge = edgeCharacter(child, backwards);
            if (edge !== null) return edge;
        }
        return null;
    }

    // Inline text joins a word, but a nested <br> or block still ends that word.
    function adjacentCharacter(textNode, answer, backwards) {
        const direction = backwards ? 'previousSibling' : 'nextSibling';
        for (let cursor = textNode; cursor && cursor !== answer;) {
            for (let sibling = cursor[direction]; sibling; sibling = sibling[direction]) {
                const edge = edgeCharacter(sibling, backwards);
                if (edge !== null) return edge;
            }
            cursor = cursor.parentElement;
            if (cursor && BLOCK_TAGS.has(cursor.tagName)) return '';
        }
        return '';
    }

    function annotateAnswer(answer) {
        if (!container.contains(answer) || answer.closest(SKIP)) return;
        const seen = new Set(Array.from(answer.querySelectorAll(TERM), node => node.getAttribute('data-glossary-term')));
        const walker = document.createTreeWalker(answer, 4, {
            acceptNode(node) {
                return node.nodeValue.trim() && node.parentElement && !node.parentElement.closest(SKIP) ? 1 : 2;
            }
        });
        const nodes = [];
        let node;
        while ((node = walker.nextNode())) nodes.push(node);
        for (const textNode of nodes) {
            const value = textNode.nodeValue;
            const matches = index.match(value).filter(match => {
                if (seen.has(match.termId) || !index.get(match.termId)) return false;
                if (match.start === 0 && /[A-Za-z0-9_$]/.test(value[0]) &&
                    /[A-Za-z0-9_$]/.test(adjacentCharacter(textNode, answer, true))) return false;
                if (match.end === value.length && /[A-Za-z0-9_$]/.test(value[value.length - 1]) &&
                    /[A-Za-z0-9_$]/.test(adjacentCharacter(textNode, answer, false))) return false;
                seen.add(match.termId);
                return true;
            });
            if (!matches.length) continue;
            const fragment = document.createDocumentFragment();
            let offset = 0;
            for (const match of matches) {
                fragment.appendChild(document.createTextNode(value.slice(offset, match.start)));
                const trigger = document.createElement('span');
                trigger.className = 'glossary-term';
                trigger.setAttribute('data-glossary-term', match.termId);
                trigger.setAttribute('role', 'button');
                trigger.setAttribute('tabindex', '0');
                trigger.setAttribute('aria-haspopup', 'dialog');
                trigger.setAttribute('aria-expanded', 'false');
                trigger.setAttribute('aria-controls', POPUP_ID);
                trigger.setAttribute('aria-label', value.slice(match.start, match.end) + '：查看术语解释');
                trigger.textContent = value.slice(match.start, match.end);
                fragment.appendChild(trigger);
                offset = match.end;
            }
            fragment.appendChild(document.createTextNode(value.slice(offset)));
            textNode.parentElement.replaceChild(fragment, textNode);
        }
    }

    function collectAnswers(root, answers) {
        const element = root && (root.nodeType === 3 ? root.parentElement : root);
        if (!element || element.nodeType !== 1 || !container.contains(element)) return;
        const answer = element.closest(ANSWER);
        if (answer) answers.add(answer);
        element.querySelectorAll(ANSWER).forEach(node => answers.add(node));
    }

    function observe() {
        if (observer) observer.observe(container, { childList: true, characterData: true, subtree: true,
            attributes: true, attributeFilter: ['class', 'hidden', 'style'] });
    }

    function enhance(root = container) {
        if (!index || !container) return;
        const answers = new Set();
        collectAnswers(root, answers);
        // Preserve external updates queued before a caller requested a direct enhancement.
        if (observer) {
            for (const record of observer.takeRecords()) {
                collectAnswers(record.target, answers);
                if (record.addedNodes) record.addedNodes.forEach(node => collectAnswers(node, answers));
            }
            observer.disconnect();
        }
        try { answers.forEach(annotateAnswer); }
        finally { observe(); }
        if (activeTrigger && !activeIsVisible()) close(false);
    }

    function onMutations(records) {
        if (activeTrigger && !activeIsVisible()) close(false);
        for (const record of records) {
            // Visibility changes only affect an open popup; new text arrives as child/text changes.
            if (record.type === 'attributes') continue;
            collectAnswers(record.target, pending);
            if (record.addedNodes) record.addedNodes.forEach(node => collectAnswers(node, pending));
        }
        if (!pending.size || frame) return;
        frame = global.requestAnimationFrame(() => {
            frame = 0;
            const answers = Array.from(pending);
            pending.clear();
            observer.disconnect();
            try { answers.forEach(annotateAnswer); }
            finally { observe(); }
        });
    }

    function init(termIndex, answerContainer) {
        if (!termIndex || typeof termIndex.match !== 'function' || typeof termIndex.get !== 'function' || !answerContainer) return;
        close(false);
        if (observer) observer.disconnect();
        if (frame) global.cancelAnimationFrame(frame);
        frame = 0;
        pending.clear();
        listeners.splice(0).forEach(remove => remove());
        if (popup) popup.remove();
        index = termIndex;
        container = answerContainer;
        popup = document.createElement('section');
        popup.id = POPUP_ID;
        popup.className = 'glossary-popover';
        popup.hidden = true;
        popup.setAttribute('role', 'dialog');
        popup.setAttribute('tabindex', '-1');
        popup.setAttribute('aria-labelledby', POPUP_ID + '-title');
        popup.setAttribute('aria-describedby', POPUP_ID + '-definition');
        popupTitle = document.createElement('h2');
        popupTitle.id = POPUP_ID + '-title';
        popupDefinition = document.createElement('p');
        popupDefinition.id = POPUP_ID + '-definition';
        closeButton = document.createElement('button');
        closeButton.className = 'glossary-popover-close';
        closeButton.setAttribute('type', 'button');
        closeButton.setAttribute('aria-label', '关闭术语解释');
        closeButton.textContent = '×';
        popup.append(popupTitle, popupDefinition, closeButton);
        document.body.appendChild(popup);

        const activate = event => {
            const trigger = event.target.closest && event.target.closest(TERM);
            if (!trigger || !container.contains(trigger)) return;
            if (event.type === 'keydown' && event.key !== 'Enter' && event.key !== ' ') return;
            event.preventDefault();
            event.stopPropagation();
            open(trigger);
        };
        listen(container, 'click', activate, true);
        listen(container, 'keydown', activate, true);
        listen(closeButton, 'click', () => close());
        listen(document, 'keydown', event => {
            if (event.key === 'Escape' && activeTrigger) {
                event.preventDefault();
                event.stopImmediatePropagation();
                close();
            }
        }, true);
        listen(document, 'pointerdown', event => {
            if (activeTrigger && !popup.contains(event.target) && !activeTrigger.contains(event.target)) close(false);
        }, true);
        listen(document, 'focusin', event => {
            if (activeTrigger && !popup.contains(event.target) && event.target !== activeTrigger) close(false);
        });
        listen(global, 'resize', positionPopup, { passive: true });
        listen(global, 'scroll', event => {
            if (!popup.contains(event.target)) close(false);
        }, { passive: true, capture: true });
        if (global.visualViewport) {
            listen(global.visualViewport, 'resize', positionPopup, { passive: true });
            listen(global.visualViewport, 'scroll', positionPopup, { passive: true });
        }
        listen(global, 'hashchange', () => close(false));
        listen(global, 'popstate', () => close(false));
        observer = new global.MutationObserver(onMutations);
        enhance(container);
    }

    global.GlossaryHighlighter = { init, enhance, close };
})(window);
