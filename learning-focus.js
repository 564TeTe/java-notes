/* Shared focus lifecycle. The reader keeps window scrolling; the atlas owns its canvas. */
(function(root){
    'use strict';
    let active=null;
    function release(){
        if(!active)return;
        const previous=active;active=null;
        previous.outside.forEach(([element,inert])=>{element.inert=inert;});
        document.body.style.overflow=previous.overflow;
        if(previous.kind===undefined)delete document.body.dataset.learningFocus;
        else document.body.dataset.learningFocus=previous.kind;
        for(const [name,value] of previous.attributes){
            if(value===null)previous.element.removeAttribute(name);
            else previous.element.setAttribute(name,value);
        }
    }
    function prune(){if(active&&!active.element.isConnected)release();}
    function sync(element,enabled,options={}){
        prune();
        if(!element||!enabled){
            if(active&&(element?active.element===element:(!options.kind||active.options.kind===options.kind)))release();
            return;
        }
        if(active?.element===element){active.options=options;return;}
        release();
        const outside=[];
        let current=element;
        while(current&&current!==document.body){
            const parent=current.parentElement;if(!parent)break;
            for(const sibling of parent.children){
                if(sibling===current||['SCRIPT','STYLE','LINK'].includes(sibling.tagName))continue;
                outside.push([sibling,sibling.inert]);sibling.inert=true;
            }
            current=parent;
        }
        const attributes=['role','aria-modal','tabindex'].map(name=>[name,element.getAttribute(name)]);
        active={element,options,outside,attributes,overflow:document.body.style.overflow,kind:document.body.dataset.learningFocus};
        document.body.dataset.learningFocus=options.kind;
        if(options.kind==='mindmap')document.body.style.overflow='hidden';
        element.setAttribute('role','dialog');element.setAttribute('aria-modal','true');element.setAttribute('tabindex','-1');
        if(!element.contains(document.activeElement))element.focus({preventScroll:true});
    }
    function stop(event){event.preventDefault();event.stopImmediatePropagation();}
    document.addEventListener('keydown',event=>{
        prune();
        if(!active||event.isComposing||event.defaultPrevented)return;
        const {element,options}=active;
        if(element.querySelector('dialog[open]'))return;
        if((event.ctrlKey||event.metaKey)&&['k','b'].includes(event.key.toLowerCase())){
            stop(event);if(event.key.toLowerCase()==='k')options.onSearch?.();return;
        }
        if(event.key==='Escape'){
            const detail=element.querySelector('.xl-reading-settings[open],.xl-quick-nav[open],.mm-menu[open],.mobile-choice[open]')||event.target.closest?.('details[open]');
            stop(event);
            if(detail&&element.contains(detail)){detail.open=false;detail.querySelector('summary')?.focus();}
            else (options.onEscape||options.onExit)?.();
            return;
        }
        if(event.key!=='Tab')return;
        const controls=[...element.querySelectorAll('button:not([disabled]),a[href],input:not([disabled]),select:not([disabled]),textarea:not([disabled]),summary,[tabindex]:not([tabindex="-1"])')]
            .filter(control=>control.getClientRects().length&&!control.closest('[inert]')&&control.getAttribute('aria-hidden')!=='true');
        const first=controls[0],last=controls[controls.length-1];
        if(!first){stop(event);element.focus();return;}
        const current=document.activeElement;
        if(event.shiftKey&&(current===first||!controls.includes(current))){stop(event);last.focus();}
        else if(!event.shiftKey&&(current===last||!controls.includes(current))){stop(event);first.focus();}
    },true);
    if(typeof MutationObserver!=='undefined')new MutationObserver(prune).observe(document.body,{childList:true,subtree:true});
    root.addEventListener('pagehide',release);
    root.LearningFocus={sync,prune};
})(window);
