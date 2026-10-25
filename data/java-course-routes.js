(function(root,factory){
 const routes=factory();
 if(typeof module==='object'&&module.exports)module.exports=routes;
 else root.JavaCourseRoutes=routes;
})(typeof window==='undefined'?globalThis:window,function(){
 'use strict';
 const step=(id,label)=>({id,label});
 return [
  {id:'objects-and-spring',title:'对象到一次请求',steps:[
   step('course-java-reference-call','对象、引用与调用'),step('course-spring-ioc','依赖如何组装'),
   step('course-spring-lifecycle','对象的准备过程'),step('course-spring-mvc','追踪 /users/5'),
   step('course-spring-mapper','Mapper、SQL 与结果'),step('course-spring-transaction','业务提交与响应')]},
  {id:'concurrency-and-pools',title:'并发到异步执行',steps:[
   step('course-juc-jmm','共享变量与可见性'),step('course-juc-locks','保护共同的不变量'),
   step('course-juc-executor','排队、扩容与拒绝'),step('course-juc-futures','组合结果与失败'),
   step('course-spring-async','跨线程的上下文'),step('course-spring-transaction','事务的执行边界')]},
  {id:'queries-and-cache',title:'SQL 到缓存一致性',steps:[
   step('course-spring-mapper','参数进入 SQL'),step('course-mysql-index-tree','索引怎样找到行'),
   step('course-mysql-index-query','查询条件与扫描范围'),step('course-mysql-performance','用执行计划验证'),
   step('course-spring-transaction','提交与回滚'),step('course-redis-cache-aside','并发回填与失效')]},
  {id:'network-and-requests',title:'网络到业务响应',steps:[
   step('course-network-layers','寻址、分层与进程'),step('course-network-tcp-lifecycle','建立与关闭连接'),
   step('course-network-http','请求与响应语义'),step('course-network-tls','加密与身份校验'),
   step('course-spring-mvc','Web 层参数与响应'),step('course-spring-mapper','数据库访问')]},
  {id:'jvm-and-diagnostics',title:'运行机制到故障定位',steps:[
   step('course-java-execution','源码到运行程序'),step('course-jvm-loading','类加载与初始化'),
   step('course-jvm-memory','对象与运行时内存'),step('course-jvm-reachability','可达性与回收'),
   step('course-jvm-g1','GC 与停顿'),step('course-jvm-diagnostics','建立诊断证据'),
   step('course-engineering-logging','关联一次失败请求')]},
  {id:'messages-and-distribution',title:'提交、消息与重试',steps:[
   step('course-spring-transaction','本地事务边界'),step('course-mq-delivery','消费确认与幂等'),
   step('course-mq-outbox','可靠发送与积压'),step('course-cap-transactions','跨服务事务取舍'),
   step('course-spring-cloud','超时、熔断与重试'),step('course-engineering-deploy','验证完整业务路径')]}
 ];
});
