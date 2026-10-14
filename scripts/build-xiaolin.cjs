/* Build once; the site itself has no runtime Markdown dependency. */
const fs = require('node:fs');
const path = require('node:path');
const {createHash} = require('node:crypto');
const MarkdownIt = require('markdown-it');
const cheerio = require('cheerio');
const ROOT = path.resolve(__dirname, '..');
const ORDER = ['java','collections','juc','jvm','spring','mysql','redis','network','os','data','mq','cap','systemdesign','linux','git','docker','win'];
const TITLES = ['Java 基础','集合与容器','并发编程','JVM 与内存','Spring 框架','MySQL','Redis','计算机网络','操作系统','数据结构与算法','消息队列','分布式系统','系统设计','Linux 命令','Git 版本管理','Docker','后端进阶之路'];
const allowed = new Set('p br h1 h2 h3 h4 h5 h6 blockquote ul ol li pre code strong b em i del s a img table thead tbody tfoot tr th td hr details summary sup sub kbd div span'.split(' '));
function safeURL(raw, base) {
    try { const url = new URL(raw, base); return ['http:','https:'].includes(url.protocol) && !url.username && !url.password ? url.href : ''; } catch { return ''; }
}
function createRenderer() {
    const md = new MarkdownIt({html:true,linkify:false,typographer:false});
    return (text, source) => {
        const $ = cheerio.load(md.render(text || ''), null, false);
        $('script,style,iframe,object,embed,form,input,button,textarea,select,svg,math').remove();
        $('*').each((_, element) => {
            const tag = element.tagName, node = $(element), attrs = {...element.attribs};
            if (!allowed.has(tag)) { node.replaceWith(node.contents()); return; }
            for (const key of Object.keys(attrs)) node.removeAttr(key);
            if (tag === 'a') {
                const href = safeURL(attrs.href || '', source);
                if (attrs.href && href) node.attr({href,target:'_blank',rel:'noopener noreferrer'});
            }
            if (tag === 'img') {
                const src = attrs.src && safeURL(attrs.src, source);
                if (!src) { node.remove(); return; }
                node.attr({src,alt:attrs.alt || '原文图解',loading:'lazy',decoding:'async',referrerpolicy:'no-referrer'});
            }
            if (tag === 'code' && /^language-[\w+-]+$/.test(attrs.class || '')) node.attr('class',attrs.class);
            if (tag === 'ol' && /^\d{1,5}$/.test(attrs.start || '')) node.attr('start',attrs.start);
            for (const key of ['colspan','rowspan']) if (['td','th'].includes(tag) && /^\d{1,3}$/.test(attrs[key] || '')) node.attr(key,attrs[key]);
        });
        $('table').wrap('<div class="xl-table-scroll" tabindex="0" role="region" aria-label="表格，可横向滚动"></div>');
        $('pre').attr('tabindex','0');
        return $.html();
    };
}
const stableId = (prefix, anchor) => prefix + '-' + createHash('sha256').update(anchor).digest('hex').slice(0,16);
function build(bundlePath, outputPath = path.join(ROOT, 'data/xiaolin')) {
    const render = createRenderer(), catalog = {version:1,author:'小林coding',collectedAt:'',groups:[],topics:[]};
    let verified = 0;
    fs.mkdirSync(outputPath,{recursive:true});
    for (const [position, id] of ORDER.entries()) {
        const source = JSON.parse(fs.readFileSync(path.join(bundlePath,'pages',id,'content.json'),'utf8'));
        if (!catalog.groups.some(group => group.id === source.groupId)) catalog.groups.push({id:source.groupId,title:source.groupName.replace(/^\d+｜/,'').replace('面试篇','')});
        catalog.collectedAt = source.collectedAt.slice(0,10);
        const rich = markdown => ({markdown:markdown || '',html:render(markdown,source.source)});
        const topic = {id,title:TITLES[position],originalTitle:source.title,source:source.source,groupId:source.groupId,count:source.questionCount,file:`data/xiaolin/${id}.json`,chapters:[],sections:[]};
        const data = {id,introduction:rich(source.introduction),chapters:[]};
        const references = new Map((source.referenceSections || []).map(section=>[section.anchor,section]));
        for (const category of source.categories) {
            const chapterId = stableId(`xl-ch-${id}`,category.anchor || category.name);
            const chapter = {id:chapterId,title:category.name,source:category.sourceUrl,introduction:rich(category.introduction),sections:[]};
            for (const q of category.questions || []) {
                const section = {id:stableId(`xl-${id}`,q.anchor),title:q.question,source:q.sourceUrl,kind:'lesson',...rich(q.answer)};
                if (!section.markdown.trim()) throw Error('Empty lesson: '+q.sourceUrl);
                chapter.sections.push(section); verified++;
            }
            const ref = references.get(category.anchor);
            if (!chapter.sections.length && ref) {
                chapter.introduction = rich('');
                chapter.sections.push({id:stableId(`xl-ref-${id}`,ref.anchor),title:ref.name,source:ref.sourceUrl,kind:'reference',...rich(ref.content)});
            }
            if (!chapter.sections.length && category.introduction) {
                chapter.sections.push({id:stableId(`xl-ref-${id}`,category.anchor),title:category.name,source:category.sourceUrl,kind:'reference',...rich(category.introduction)});
                chapter.introduction = rich('');
            }
            data.chapters.push(chapter);
            references.delete(category.anchor);
        }
        for (const ref of references.values()) {
            const chapterId = stableId(`xl-ch-${id}`,ref.anchor);
            data.chapters.push({id:chapterId,title:ref.name,source:ref.sourceUrl,introduction:rich(''),sections:[{id:stableId(`xl-ref-${id}`,ref.anchor),title:ref.name,source:ref.sourceUrl,kind:'reference',...rich(ref.content)}]});
        }
        for(const chapter of data.chapters) {
            const sections=chapter.sections.map(section=>({id:section.id,title:section.title,source:section.source,kind:section.kind,chapterId:chapter.id,minutes:Math.max(1,Math.ceil(section.markdown.length/650))}));
            topic.chapters.push({id:chapter.id,title:chapter.title,source:chapter.source,sectionIds:sections.map(s=>s.id),minutes:sections.reduce((n,s)=>n+s.minutes,0)});
            topic.sections.push(...sections);
        }
        if (topic.sections.filter(s=>s.kind==='lesson').length !== source.questionCount) throw Error('Lesson count mismatch: '+id);
        fs.writeFileSync(path.join(outputPath,id+'.json'),JSON.stringify(data));
        catalog.topics.push(topic);
    }
    if (verified !== 945) throw Error('Expected 945 lessons, got '+verified);
    fs.writeFileSync(path.join(outputPath,'catalog.js'),'/* Generated by scripts/build-xiaolin.cjs. */\n(function(root){const data='+JSON.stringify(catalog)+';if(typeof module==="object"&&module.exports)module.exports=data;else root.XIAOLIN_CATALOG=data;})(typeof window==="undefined"?globalThis:window);\n');
    console.log(`Imported ${verified} lessons, ${catalog.topics.length} topics, ${catalog.topics.reduce((n,t)=>n+t.chapters.length,0)} chapters.`);
    return catalog;
}
if (require.main === module) {
    if (!process.argv[2]) throw Error('Usage: node scripts/build-xiaolin.cjs <interview-bundle path>');
    build(path.resolve(process.argv[2]));
}
module.exports={createRenderer,build};
