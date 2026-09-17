/* Preserve v43 records in backups without loading the retired editors and timer. */
(function(){
 const KEY='resume-prep-workbench',object=v=>v&&typeof v==='object'&&!Array.isArray(v),text=(v,n=4000)=>typeof v==='string'?v.slice(0,n):'';
 function clean(v){const result={claims:{},pitches:{}};if(!object(v))return result;
  for(const c of RESUME_CLAIMS.items){const e=object(v.claims)&&v.claims[c.id];if(!object(e))continue;result.claims[c.id]=Object.fromEntries(['responsibility','decisions','evidence','gaps'].map(k=>[k,text(e[k])]));result.claims[c.id].verified=e.verified===true;}
  for(const p of RESUME_PREP_DATA.pitches){const e=object(v.pitches)&&v.pitches[p.id];if(!object(e))continue;const next={draft:text(e.draft,6000),reflection:text(e.reflection)},last=e.last;if(object(last)&&['clear','hesitant','retry'].includes(last.rating)&&Number.isInteger(last.seconds)&&last.seconds>0&&last.seconds<=86400&&typeof last.at==='string'&&Number.isFinite(Date.parse(last.at)))next.last={rating:last.rating,seconds:last.seconds,at:last.at.slice(0,30)};result.pitches[p.id]=next;}
  return result;
 }
 let records={claims:{},pitches:{}};try{records=clean(JSON.parse(localStorage.getItem(KEY)||'{}'));}catch(_){}
 window.ResumeWorkbench={getSnapshot(){return JSON.parse(JSON.stringify(records));},applySnapshot(v){if(!object(v))return;records=clean(v);try{localStorage.setItem(KEY,JSON.stringify(records));}catch(_){if(typeof toast==='function')toast('简历旧记录未保存到本机');}}};
})();
