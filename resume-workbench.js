/* Personal preparation records; reference content stays separate from the user's answers. */
(function () {
    const KEY = 'resume-prep-workbench';
    const fields = [['responsibility','本人职责'],['decisions','技术取舍'],['evidence','验证证据'],['gaps','待补问题']];
    const ratings = {clear:'能独立讲清',hesitant:'有卡顿',retry:'需要重练'};
    const object = value => value && typeof value === 'object' && !Array.isArray(value);
    const text = (value, limit = 4000) => typeof value === 'string' ? value.slice(0, limit) : '';
    const escape = value => String(value ?? '').replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;').replaceAll("'",'&#039;');
    const data = () => window.RESUME_PREP_DATA;
    const claims = () => window.RESUME_CLAIMS.items;
    const sourceName = id => data().sources.find(s => s.id === id)?.shortName || '';
    const claimById = id => claims().find(c => c.id === id);
    const pitchById = id => data().pitches.find(p => p.id === id);
    let records = {claims:{},pitches:{}}, saved = true, openedClaim = null, selectedPitch = null, view = null;
    let elapsed = 0, startedAt = null, interval = null;

    function clean(value) {
        const result = {claims:{},pitches:{}};
        if (!object(value)) return result;
        for (const claim of claims()) {
            const entry = object(value.claims) && value.claims[claim.id];
            if (!object(entry)) continue;
            result.claims[claim.id] = Object.fromEntries(fields.map(([key]) => [key,text(entry[key])]));
            result.claims[claim.id].verified = entry.verified === true;
        }
        for (const pitch of data().pitches) {
            const entry = object(value.pitches) && value.pitches[pitch.id];
            if (!object(entry)) continue;
            const next = {draft:text(entry.draft,6000),reflection:text(entry.reflection)};
            if (object(entry.last) && Object.hasOwn(ratings,entry.last.rating) && Number.isInteger(entry.last.seconds)
                && entry.last.seconds > 0 && entry.last.seconds <= 86400 && typeof entry.last.at === 'string' && Number.isFinite(Date.parse(entry.last.at))) {
                next.last = {rating:entry.last.rating,seconds:Math.floor(entry.last.seconds),at:entry.last.at.slice(0,30)};
            }
            result.pitches[pitch.id] = next;
        }
        return result;
    }
    try { records = clean(JSON.parse(localStorage.getItem(KEY) || '{}')); } catch (_) { /* Start with empty valid records. */ }
    const statusText = () => saved ? '已保存到本机 · 随学习数据备份与同步' : '未保存到本机，请复制保留内容后重试';
    function persist(statusId, sync = true) {
        try { localStorage.setItem(KEY,JSON.stringify(records)); saved = true; }
        catch (_) { saved = false; }
        const status = document.getElementById(statusId);
        if (status) status.textContent = statusText();
        if (saved && sync && typeof scheduleCloudSync === 'function') scheduleCloudSync();
        return saved;
    }
    const recordFor = id => records.pitches[id] ||= {draft:'',reflection:''};
    const currentMs = () => elapsed + (startedAt === null ? 0 : Math.max(0,Date.now() - startedAt));
    const clockText = () => { const seconds = Math.floor(currentMs()/1000); return `${String(Math.floor(seconds/60)).padStart(2,'0')}:${String(seconds%60).padStart(2,'0')}`; };
    function updateClock() {
        const clock = document.getElementById('resumeOralClock');
        if (clock) clock.textContent = clockText();
        const button = document.getElementById('resumeOralStart');
        if (button) button.textContent = startedAt === null ? (elapsed ? '继续计时' : '开始计时') : '暂停计时';
    }
    function pause() {
        if (startedAt !== null) elapsed = Math.min(currentMs(),86400000);
        startedAt = null;
        if (interval !== null) clearInterval(interval);
        interval = null;
        updateClock();
    }
    function resetClock() { pause(); elapsed = 0; updateClock(); }
    function lastPractice(pitch) {
        const last = records.pitches[pitch.id]?.last;
        return last ? `上次 ${last.at.slice(0,10)} · ${last.seconds} 秒 · ${ratings[last.rating]}（自评）` : '尚未记录练习';
    }

    function renderOverview(progress) {
        const verified = claims().filter(c => records.claims[c.id]?.verified).length;
        const practiced = data().pitches.filter(p => records.pitches[p.id]?.last).length;
        const nextClaim = [...claims().filter(c => c.id === 'br-report' || c.id === 'br-sales'),...claims()].find(c => !records.claims[c.id]?.verified);
        const weak = progress.fuzzy + progress.hard;
        return `<div class="resume-workbench">
            <div class="rw-version"><span>当前简历 · ${escape(window.RESUME_CLAIMS.date)}</span><a href="${escape(data().sources.find(s=>s.id==='resume')?.file || './assets/resume/sun-te-resume.pdf')}" target="_blank" rel="noopener">查看 PDF ↗</a></div>
            <section class="rw-route" aria-label="准备步骤">
                <button onclick="setResumePrepTab('stories')"><span class="rw-step">01</span><span><strong>逐条准备</strong><small>职责 · 取舍 · 证据</small></span><b>${verified}<small>/${claims().length} 已核实</small></b><i>↗</i></button>
                <button onclick="setResumePrepTab('pitches')"><span class="rw-step">02</span><span><strong>口述练习</strong><small>个人稿 · 计时 · 复盘</small></span><b>${practiced}<small>/${data().pitches.length} 已练</small></b><i>↗</i></button>
                <button onclick="setResumePrepTab('questions')"><span class="rw-step">03</span><span><strong>追问练习</strong><small>回答顺序 · 深挖 · 薄弱项</small></span><b>${progress.known}<small>/${progress.questionTotal} 已掌握</small></b><i>↗</i></button>
            </section>
            <section class="rw-next"><div><small>下一步</small><h2>${nextClaim ? escape(nextClaim.title) : weak ? '复习薄弱追问' : '练一遍自我介绍'}</h2><p>${nextClaim ? '补齐自己的职责、方案和验证记录，再标记已核实。' : '先独立回答，再对照参考内容复盘。'}</p></div><button class="career-primary" onclick="${nextClaim ? `openResumeClaim('${nextClaim.id}')` : weak ? 'reviewResumeWeak()' : `setResumePrepTab('pitches')`}">${nextClaim ? '完善这一条' : '开始练习'} →</button></section>
            <div class="rw-section-title"><h2>按经历准备</h2><span>2 段实习 · 1 个项目</span></div>
            <section class="rw-experiences">${data().sources.filter(s=>s.id!=='resume').map(source=>{
                const items=claims().filter(c=>c.source===source.id),count=items.filter(c=>records.claims[c.id]?.verified).length;
                return `<article><div><h3>${escape(source.shortName)}</h3><p>${escape(source.summary)}</p></div><span>${count}/${items.length} 已核实</span><button class="career-secondary" onclick="openResumeSource('${source.id}')">逐条准备 →</button></article>`;
            }).join('')}</section>
            <div class="rw-overview-foot"><button class="career-text" onclick="reviewResumeWeak()">薄弱追问 ${weak} 道 →</button><button class="career-text" onclick="setResumePrepTab('checklist')">冲刺清单 ${progress.checked}/${progress.checklistTotal} →</button></div>
        </div>`;
    }

    function renderClaims(source) {
        const items = claims().filter(c=>source==='all'||c.source===source);
        return `<section class="resume-workbench rw-claims"><div class="rw-section-title"><h2>简历逐条准备</h2><span>${items.length} 条 · ${escape(window.RESUME_CLAIMS.date)} 版</span></div>
        <p class="rw-hint">先按真实经历填写；“已核实”由你确认，修改记录后需重新核实。</p>
        ${items.map((claim,index)=>{
            const entry=records.claims[claim.id]||{},verified=entry.verified===true;
            return `<details class="rw-claim" id="claim-${claim.id}" ${openedClaim===claim.id?'open':''} ontoggle="rememberResumeClaim('${claim.id}',this.open)">
                <summary><span class="rw-claim-number">${String(index+1).padStart(2,'0')}</span><span><small>${escape(sourceName(claim.source))}</small><strong>${escape(claim.title)}</strong></span><em id="claim-state-${claim.id}">${verified?'已核实':'待准备'}</em><i aria-hidden="true">＋</i></summary>
                <div class="rw-claim-body"><blockquote><small>简历原文</small>${escape(claim.quote)}</blockquote>
                <div class="rw-note-grid">${fields.map(([key,label],i)=>`<label for="claim-${claim.id}-${key}"><strong>${label}</strong><span>${escape(claim.prompts[i])}</span><textarea id="claim-${claim.id}-${key}" rows="3" maxlength="4000" placeholder="写下自己的实际情况…" oninput="saveResumeClaim('${claim.id}','${key}',this.value)">${escape(entry[key]||'')}</textarea></label>`).join('')}</div>
                <div class="rw-claim-save"><label><input type="checkbox" id="claim-verified-${claim.id}" ${verified?'checked':''} onchange="verifyResumeClaim('${claim.id}',this.checked)">职责、实现与证据已核实</label><small id="claim-save-${claim.id}" role="status">${statusText()}</small></div>
                <div class="rw-linked-questions"><strong>面试官可能追问</strong>${claim.questionIds.map(id=>{const q=data().questions.find(q=>q.id===id);return q?`<button onclick="practiceResumeQuestion('${id}')">${escape(q.question)} <span>→</span></button>`:'';}).join('')}</div></div>
            </details>`;
        }).join('') || '<p class="resume-empty">选择一段实习或项目开始准备。</p>'}</section>`;
    }

    function renderPitches(source) {
        const pitches=data().pitches.filter(p=>source==='all'||p.source===source);
        if (!pitches.some(p=>p.id===selectedPitch)) {resetClock();selectedPitch=pitches[0]?.id;}
        const pitch=pitchById(selectedPitch);
        if (!pitch) return '<p class="resume-empty">这段经历暂无口述稿。</p>';
        const record=records.pitches[pitch.id]||{};
        return `<section class="resume-workbench rw-oral">
            <div class="rw-oral-heading"><label>练习内容<select aria-label="选择口述稿" onchange="selectResumeOral(this.value)">${pitches.map(p=>`<option value="${p.id}" ${p.id===pitch.id?'selected':''}>${escape(p.title)} · ${escape(p.duration)}</option>`).join('')}</select></label><span>${escape(sourceName(pitch.source))} · 目标 ${escape(pitch.duration)}</span></div>
            <div class="rw-oral-layout"><div class="rw-oral-main"><label for="resumeOralDraft"><strong>我的口述稿</strong><span>背景 → 我的工作 → 一个技术细节 → 结果与边界</span></label><textarea id="resumeOralDraft" rows="9" maxlength="6000" placeholder="先用自己的话讲清楚，再对照下方参考稿补充。" oninput="saveResumeOralDraft('${pitch.id}',this.value)">${escape(record.draft||'')}</textarea>
            <details class="rw-reference"><summary>查看参考稿</summary><p>${escape(pitch.content)}</p><button class="career-text" onclick="copyResumePitch('${pitch.id}')">复制参考稿</button></details></div>
            <aside class="rw-timer"><span>本次用时</span><output id="resumeOralClock" role="timer" aria-live="off" aria-label="本次练习用时">${clockText()}</output><div class="rw-timer-actions"><button id="resumeOralStart" class="career-primary" onclick="toggleResumeOralTimer()">${startedAt===null?(elapsed?'继续计时':'开始计时'):'暂停计时'}</button><button class="career-text" onclick="resetResumeOralTimer()">重置</button></div><p>只计时，不录音。离开页面自动暂停。</p><fieldset><legend>结束并记录本次自评</legend>${Object.entries(ratings).map(([id,label])=>`<button onclick="finishResumeOral('${id}')">${label}</button>`).join('')}</fieldset><small id="oral-last-practice" role="status">${escape(lastPractice(pitch))}</small></aside></div>
            <label class="rw-reflection" for="resumeOralReflection"><strong>卡顿点与下次改进</strong><textarea id="resumeOralReflection" rows="3" maxlength="4000" placeholder="哪里讲不顺？哪个数字或实现需要回去核对？" oninput="saveResumeOralReflection('${pitch.id}',this.value)">${escape(record.reflection||'')}</textarea></label><small id="oral-save-status" class="rw-save-status" role="status">${statusText()}</small>
        </section>`;
    }

    window.saveResumeClaim = (id,field,value) => {
        if (!claimById(id)||!fields.some(([key])=>key===field)||typeof value!=='string') return;
        const record=records.claims[id] ||= {};
        if (record[field]!==text(value)) record.verified=false;
        record[field]=text(value);
        const checkbox=document.getElementById(`claim-verified-${id}`);if(checkbox)checkbox.checked=!!record.verified;
        const status=document.getElementById(`claim-state-${id}`);if(status)status.textContent=record.verified?'已核实':'待准备';
        persist(`claim-save-${id}`);
    };
    window.verifyResumeClaim = (id,checked) => {
        if (!claimById(id)) return;
        (records.claims[id] ||= {}).verified=checked===true;
        const status=document.getElementById(`claim-state-${id}`);if(status)status.textContent=checked?'已核实':'待准备';
        persist(`claim-save-${id}`);
    };
    window.rememberResumeClaim = (id,open) => {if(open)openedClaim=id;else if(openedClaim===id)openedClaim=null;};
    window.openResumeClaim = id => {
        const claim=claimById(id);if(!claim)return;
        openedClaim=id;window.openResumeSource(claim.source);
        requestAnimationFrame(()=>{const el=document.getElementById(`claim-${id}`);el?.scrollIntoView({behavior:'smooth',block:'start'});el?.querySelector('summary')?.focus({preventScroll:true});});
    };
    window.selectResumeOral = id => {if(!pitchById(id))return;resetClock();selectedPitch=id;renderAll();};
    window.saveResumeOralDraft = (id,value) => {if(!pitchById(id)||typeof value!=='string')return;recordFor(id).draft=text(value,6000);persist('oral-save-status');};
    window.saveResumeOralReflection = (id,value) => {if(!pitchById(id)||typeof value!=='string')return;recordFor(id).reflection=text(value);persist('oral-save-status');};
    window.toggleResumeOralTimer = () => {
        if(view!=='pitches'||!pitchById(selectedPitch))return;
        if(startedAt!==null){pause();return;}
        startedAt=Date.now();
        interval=setInterval(()=>{if(!document.getElementById('resumeOralClock'))pause();else updateClock();},250);
        updateClock();
    };
    window.resetResumeOralTimer = resetClock;
    window.finishResumeOral = rating => {
        if(!Object.hasOwn(ratings,rating)||!pitchById(selectedPitch))return;
        pause();const seconds=Math.floor(currentMs()/1000);
        if(!seconds){if(typeof toast==='function')toast('先计时练习，再记录本次自评');return;}
        recordFor(selectedPitch).last={seconds,rating,at:new Date().toISOString()};
        const success=persist('oral-save-status');
        const status=document.getElementById('oral-last-practice');if(status)status.textContent=lastPractice(pitchById(selectedPitch));
        resetClock();
        if(typeof toast==='function')toast(success?'本次练习已记录':'未保存到本机，请复制保留内容');
    };
    document.addEventListener('visibilitychange',()=>{if(document.hidden)pause();});
    window.addEventListener?.('pagehide',pause);
    window.ResumeWorkbench = {
        renderOverview,renderClaims,renderPitches,
        enterView(tab){view=tab;if(tab!=='pitches')pause();},
        getSnapshot(){return JSON.parse(JSON.stringify(records));},
        applySnapshot(value){if(!object(value))return;resetClock();records=clean(value);persist(null,false);}
    };
})();
