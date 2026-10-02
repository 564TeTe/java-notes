const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const dataPath = path.join(__dirname, '..', 'annotation-data.js');
function readCatalog() {
  assert.ok(fs.existsSync(dataPath), 'Java 注解学习目录应已创建');
  return require(dataPath);
}

test('学习目录覆盖九类常用注解，每条可独立学习和定位官方资料', () => {
  const data = readCatalog();
  assert.equal(data.categories.length, 9);
  assert.ok(data.annotations.length >= 60);
  const categories = new Set(data.categories.map(item => item.id));
  const ids = new Set();
  const names = new Set();
  for (const item of data.annotations) {
    assert.ok(!ids.has(item.id), `重复 id: ${item.id}`);
    assert.ok(!names.has(item.packageName), `重复全限定名: ${item.packageName}`);
    ids.add(item.id); names.add(item.packageName);
    assert.ok(categories.has(item.category), `${item.name} 分类不存在`);
    assert.match(item.name, /^@[A-Za-z][A-Za-z0-9]*$/);
    assert.ok(item.packageName.endsWith(item.name.slice(1)));
    for (const key of ['summary', 'packageName', 'phase', 'example']) {
      assert.ok(typeof item[key] === 'string' && item[key].trim(), `${item.name} 缺少 ${key}`);
    }
    assert.ok(['high', 'normal'].includes(item.frequency));
    for (const key of ['targets', 'attributes', 'pitfalls', 'sources']) {
      assert.ok(Array.isArray(item[key]) && item[key].length, `${item.name} 缺少 ${key}`);
    }
    assert.ok(item.interview.question && item.interview.answer);
    for (const source of item.sources) {
      assert.ok(source.label);
      assert.match(source.url, /^https:\/\/(docs\.oracle\.com|docs\.spring\.io|jakarta\.ee|mybatis\.org|projectlombok\.org)\//);
    }
  }
  for (const category of data.categories) {
    assert.ok(data.annotations.some(item => item.category === category.id));
  }
  assert.ok(data.basics.length >= 4);
});

test('同一份数据同时可被 Node 测试与浏览器专区读取', () => {
  const data = readCatalog();
  const context = { window: {} };
  vm.runInNewContext(fs.readFileSync(dataPath, 'utf8'), context);
  assert.deepEqual(JSON.parse(JSON.stringify(context.window.ANNOTATION_DATA)), data);
});

test('容易混淆的注解给出完整包名、启用条件和关键限制', () => {
  const data = readCatalog();
  const lookup = name => data.annotations.find(item => item.name === name);
  assert.equal(lookup('@Resource').packageName, 'jakarta.annotation.Resource');
  assert.equal(lookup('@Valid').packageName, 'jakarta.validation.Valid');
  assert.equal(lookup('@Mapper').packageName, 'org.apache.ibatis.annotations.Mapper');
  assert.equal(lookup('@MapperScan').packageName, 'org.mybatis.spring.annotation.MapperScan');
  assert.match(lookup('@Param').example, /#\{[A-Za-z]/);
  assert.match(lookup('@MapperScan').example, /com\.example\.mapper/);
  assert.match(lookup('@RequiredArgsConstructor').example, /final/);
  assert.match(lookup('@Transactional').pitfalls.join(' '), /自调用/);
  assert.match(lookup('@Transactional').pitfalls.join(' '), /readOnly/);
  assert.match(lookup('@Async').pitfalls.join(' '), /void.*Future|Future.*void/);
  assert.match(lookup('@Cacheable').pitfalls.join(' '), /@EnableCaching/);
  assert.match(data.basics.map(item => item.body).join(' '), /CLASS/);
});

test('处理阶段描述注解的主要处理用途，不能把 RUNTIME 保留策略直接当作处理阶段', () => {
  const data = readCatalog();
  const lookup = name => data.annotations.find(item => item.name === name);
  assert.equal(lookup('@Retention').phase, '编译期');
  assert.equal(lookup('@Documented').phase, '文档生成期');
  assert.equal(lookup('@Deprecated').phase, '编译期警告与文档生成期');
  assert.equal(lookup('@Repeatable').phase, '编译期检查与容器生成');
  assert.match(lookup('@Deprecated').pitfalls.join(' '), /RUNTIME/);
  assert.match(lookup('@Repeatable').pitfalls.join(' '), /保留策略/);
});
