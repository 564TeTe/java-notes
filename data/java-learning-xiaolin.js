/* Curated concept readings. IDs target lessons in data/xiaolin/catalog.js. */
(function (root, factory) {
    if (typeof module === 'object' && module.exports) module.exports = factory();
    else root.JAVA_LEARNING_XIAOLIN = factory();
}(typeof window !== 'undefined' ? window : globalThis, function () {
    'use strict';

    // Order is intentional: start with the closest explanation, then extend it.
    // Overview nodes aggregate their descendants; unsupported subjects stay unmapped.
    return {
        'language-types': ['xl-java-cc5fbc84faa87441', 'xl-java-6d4d5e6e72fc490e'],
        'language-primitives': ['xl-java-cc5fbc84faa87441', 'xl-java-e01b48e09a10ebbc'],
        'language-references': ['xl-java-a1aba84b7b64c7cb', 'xl-java-9660342334c0430a'],
        'language-variables': ['xl-java-983ee2fac1f5dc2c', 'xl-java-422f06da5472701b'],
        'language-conversions': ['xl-java-96a085ee625c3d70', 'xl-java-4671a7f5d0a1cb2f', 'xl-java-4f4043134179d7ca'],
        'language-pass-by-value': ['xl-java-a1aba84b7b64c7cb'],
        'language-boxing': ['xl-java-8dfea3b5881a420d', 'xl-java-726d584888a1928c', 'xl-java-6d4d5e6e72fc490e'],
        'language-string': ['xl-java-ca4b23fce8c8fb00', 'xl-jvm-ea7be49adc8d01b9'],
        'language-equality': ['xl-java-2e34a78e5b0bc122', 'xl-java-393418751df2a13a'],
        'language-builder': ['xl-java-ca4b23fce8c8fb00'],

        'oop-classes': ['xl-java-0c3a8078607c1372', 'xl-java-00d1445912836dc1'],
        'oop-encapsulation': ['xl-java-0c3a8078607c1372'],
        'oop-inheritance': ['xl-java-0c3a8078607c1372', 'xl-java-48941d2fa776a454'],
        'oop-polymorphism': ['xl-java-ef8040e5e0216332', 'xl-java-ac49457fb648d441', 'xl-java-5e8e9c5e8b9cc01f'],
        // The design-principles lesson explicitly compares composition with inheritance.
        'oop-composition': ['xl-java-48941d2fa776a454'],
        'oop-interfaces': ['xl-java-669ab1e2a01d357e', 'xl-java-f55ad5a895dd6aa9'],
        'oop-abstract': ['xl-java-f55ad5a895dd6aa9', 'xl-java-4839a849b133ce1b'],
        'oop-generics': ['xl-java-153370a580d5f1d9'],
        // This lesson contains separate explanations of erasure and extends/super bounds.
        'oop-erasure': ['xl-java-153370a580d5f1d9'],
        'oop-wildcards': ['xl-java-153370a580d5f1d9'],
        // The concept already labels Java 16/21 boundaries; this reading covers the Java 21 extension.
        'oop-patterns': ['xl-java-ea8acda3c7959c4a'],

        'collections-interfaces': ['xl-collections-79e4d54caf4bd606', 'xl-collections-daadc70a64d91a95'],
        'collections-list': ['xl-collections-eec68ea81201a2ca', 'xl-collections-185e62c5a5d1f2f4'],
        'collections-arraylist': ['xl-collections-89090a56f463a6ce', 'xl-collections-a6bfc3e031cbeff1', 'xl-collections-dc660e7e0030b3b3'],
        'collections-linkedlist': ['xl-collections-a6bfc3e031cbeff1', 'xl-collections-3002791e890df36b'],
        'collections-map': ['xl-collections-79e4d54caf4bd606', 'xl-collections-7448c7947d6b19a2'],
        'collections-hashmap': ['xl-collections-85bbf0955f431477', 'xl-collections-d86cd1e9d818e702'],
        'collections-buckets': ['xl-collections-207c501b90bb1732', 'xl-collections-a34ef35fa7cc7b55', 'xl-collections-340107eb6b26f520'],
        'collections-key-contract': ['xl-collections-432da8c81d184136', 'xl-collections-f01241de1d6c0ca2', 'xl-collections-338f92fd8116c38e'],
        'collections-resize': ['xl-collections-aee02ec8ac4d3a6c', 'xl-collections-15c84902c7a5c61e'],
        'collections-hashmap-lookup': ['xl-collections-c508a2deeca94341', 'xl-collections-15f7adddc532484f'],
        'collections-hashmap-capacity': ['xl-collections-6287ff9e6647ad69', 'xl-collections-b351a893d55d321a', 'xl-collections-1ae4371e5c03dbd0'],
        'collections-treemap': ['xl-collections-7dfca5d9031c7614'],
        'collections-set': ['xl-collections-b1c1aa85e0134bf4', 'xl-collections-550366de723cd2a4', 'xl-collections-09880940c9f4064d'],
        'collections-queue': ['xl-collections-336f4bb2396acefb', 'xl-collections-534cfe2988ec27d4'],
        'collections-iteration': ['xl-collections-b36ca5dd1aed214d', 'xl-collections-07ca2783f710d7d8', 'xl-collections-60f7203a87667019'],
        'collections-immutable': ['xl-collections-faa5a91e6ca2b4b8', 'xl-collections-dc660e7e0030b3b3'],

        'io-exceptions': ['xl-java-9f11a931177ae386', 'xl-java-825b00e8ded16cde'],
        'io-checked': ['xl-java-9f11a931177ae386', 'xl-java-d39f0633cd836a76'],
        'io-unchecked': ['xl-java-9f11a931177ae386'],
        'io-handling': ['xl-java-825b00e8ded16cde', 'xl-java-b68a212c37fbf977', 'xl-java-4ed01c88f59e1e0d'],
        'io-resources': ['xl-java-825b00e8ded16cde'],
        'io-buffer': ['xl-java-ba0bf0e1f8041c4f', 'xl-jvm-849cf9f83b3fae05'],
        'io-channel': ['xl-java-ba0bf0e1f8041c4f', 'xl-java-5660b5304cc1d326'],

        'functional-lambda': ['xl-java-1728febe5f435a68'],
        'functional-interface': ['xl-java-1728febe5f435a68'],
        'functional-stream': ['xl-java-8a86e8c74109401f'],
        // The reading provides a concrete collect example; it does not cover custom collectors.
        'functional-collect': ['xl-java-8a86e8c74109401f'],
        'functional-side-effects': ['xl-java-1122c3a72e769328'],

        'concurrency-thread': ['xl-juc-df7a6c6fc7febe56', 'xl-juc-ae3d769156a5ba0b', 'xl-juc-03f2da06797c4e6d'],
        'concurrency-lifecycle': ['xl-juc-39c0b1b013c675ef', 'xl-juc-fb83369fabeaf982'],
        'concurrency-interrupt': ['xl-juc-13454256c43b66ac', 'xl-juc-68b5767311272aa3'],
        'concurrency-shared-state': ['xl-juc-68a4cb79c4f9be31', 'xl-juc-5dcd64419b1f38ff'],
        'concurrency-jmm': ['xl-juc-0b32ef4151b90c28'],
        'concurrency-happens-before': ['xl-juc-0b32ef4151b90c28', 'xl-juc-4756858be97eaff3'],
        'concurrency-volatile': ['xl-juc-3cf54a2ca8a1a8b4', 'xl-juc-69411483131d70ba', 'xl-juc-5d523fde41e9ee1c'],
        'concurrency-monitor': ['xl-juc-05a4ffc42d5507a4', 'xl-juc-0ccda1fcc7e33a57', 'xl-juc-0773dfcea928c9a4'],
        'concurrency-wait-notify': ['xl-juc-21d16ed082b05218', 'xl-juc-0f62508ddd076a1a', 'xl-juc-0e37e54839f03a11'],
        'concurrency-reentrant-lock': ['xl-juc-05a4ffc42d5507a4', 'xl-juc-fc38a918052aa3f5', 'xl-juc-9900674225e0fb30'],
        'concurrency-cas': ['xl-juc-f8e57a35a7ef1edb', 'xl-juc-a5f7ec0b08f00331', 'xl-juc-aacc1ae12af891e9'],
        'concurrency-atomic': ['xl-juc-bffa47ddbefdadf4', 'xl-juc-f8e57a35a7ef1edb'],
        'concurrency-concurrent-map': ['xl-collections-8a0b6fe9185f6321', 'xl-collections-7f480574adddcf0e', 'xl-collections-bca8eee327407ee0'],
        'concurrency-concurrent-map-resize': ['xl-collections-09eb239ca8ccfe5a'],
        'concurrency-concurrent-map-atomic': ['xl-collections-4724cf7d1238a223', 'xl-collections-ad502c6dea949d0a'],
        'concurrency-blocking-queue': ['xl-collections-5bdbce2247272361'],
        'concurrency-executor': ['xl-juc-6c526d87185b0d31', 'xl-juc-7b9baa87c49be20f'],
        'concurrency-executor-flow': ['xl-juc-68ecbc23e7d40dfc', 'xl-juc-3f0d73fcbdd23a2f'],
        'concurrency-executor-rejection': ['xl-juc-0384d8c79c0c240c'],
        'concurrency-executor-sizing': ['xl-juc-164587b1538717bf', 'xl-juc-7b9baa87c49be20f'],
        'concurrency-executor-lifecycle': ['xl-juc-d518b3307b15f915', 'xl-juc-340bb9b0bb91a425', 'xl-juc-c49a169315a9eeac'],
        'concurrency-completable-future': ['xl-java-3e9350dc6f5156c4', 'xl-juc-957015a67138d1f2'],
        'concurrency-thread-local': ['xl-juc-4d9f3d906282ed45'],
        'concurrency-virtual-threads': ['xl-java-ea8acda3c7959c4a'],
        // One AQS lesson teaches state, queueing, park/unpark and both acquire modes.
        // Shared links are deliberate and reading progress deduplicates section IDs.
        'concurrency-aqs': ['xl-juc-40766382817ef25c', 'xl-juc-dc8eaf10f6394718'],
        'concurrency-aqs-state': ['xl-juc-40766382817ef25c', 'xl-juc-01993a7d3cf63864'],
        'concurrency-aqs-queue': ['xl-juc-40766382817ef25c', 'xl-juc-01993a7d3cf63864'],
        'concurrency-park': ['xl-juc-40766382817ef25c'],
        'concurrency-aqs-shared': ['xl-juc-40766382817ef25c', 'xl-juc-b7522e4a9f97f6b8'],
        // ReentrantLock examples use Java Condition; the OS reading explains the waiting predicate.
        'concurrency-condition': ['xl-juc-05a4ffc42d5507a4', 'xl-collections-5bdbce2247272361', 'xl-os-57e8b5492557e74c'],
        'concurrency-lock-fairness': ['xl-juc-cd3f8b4f69ba376c', 'xl-juc-f77a3de717d80b4a', 'xl-juc-cfe6f784c9f72633'],

        'jvm-execution-pipeline': ['xl-jvm-d921ff697359a94d', 'xl-java-9ed0a0fc525d94d2'],
        'jvm-bytecode': ['xl-jvm-5ea47a446b389834', 'xl-jvm-0874a54bc7ca7d0b'],
        'jvm-class-loading': ['xl-jvm-4a06195d21af5be4', 'xl-jvm-b1ca87b722431f0c'],
        'jvm-delegation': ['xl-jvm-68092c6fa40001f9', 'xl-jvm-734a7fb5369c7b7a', 'xl-jvm-83433e2ac7df5af9'],
        'jvm-initialization': ['xl-jvm-2f19c3e92adb77e0', 'xl-jvm-e4e822173217103f'],
        'jvm-runtime-areas': ['xl-jvm-5ea47a446b389834', 'xl-jvm-84f5cb90f373602f'],
        'jvm-heap': ['xl-jvm-0f15e4818d2f179a', 'xl-jvm-e4246db2fd889a2f', 'xl-jvm-84ae1dd5c7ba2477'],
        'jvm-stack': ['xl-jvm-c0359b77c5535f5c', 'xl-jvm-eabdbf536168dd04', 'xl-jvm-cdd1741b1cd7ff43'],
        'jvm-metaspace': ['xl-jvm-154c0959522dea9f', 'xl-jvm-3284caa3f91c2ba0'],
        'jvm-reachability': ['xl-jvm-f99ee6617a26a227', 'xl-jvm-0491da874c760dcb'],
        'jvm-gc-roots': ['xl-jvm-f99ee6617a26a227'],
        'jvm-gc-algorithms': ['xl-jvm-f76473d26cb4a0eb', 'xl-jvm-da65f9b7afed2207', 'xl-jvm-b436f348f72e11fe'],
        'jvm-stw': ['xl-jvm-26aaeb6fe1c9b814', 'xl-jvm-6d350b178b8a1d33'],
        'jvm-g1': ['xl-jvm-4418c49cddef31a6', 'xl-jvm-82dcc95a555eb9e9', 'xl-jvm-1448f487f8bda6ea'],
        'jvm-remembered-set': ['xl-jvm-70014dcb1f392365'],
        'jvm-concurrent-marking': ['xl-jvm-f1abcd36a1849989', 'xl-jvm-82dcc95a555eb9e9'],
        'jvm-zgc': ['xl-jvm-1d70d9e7874547e4'],
        'jvm-diagnostics': ['xl-jvm-57ad0f2a9c2d36b2', 'xl-jvm-38067b1186492e6a', 'xl-jvm-df829b784d3fe9f3'],
        'jvm-profiling': ['xl-jvm-57ad0f2a9c2d36b2', 'xl-jvm-9a41c9ea95b56aaa'],
        'jvm-oom': ['xl-jvm-2edd0ab8c606cbdb', 'xl-jvm-aae6c4b7fc67871c', 'xl-jvm-00dea2a90859e01d'],
        'jvm-cpu-diagnosis': ['xl-jvm-9a41c9ea95b56aaa'],
        'jvm-allocation': ['xl-jvm-c42bec61a8a1dc9e', 'xl-jvm-9fe6b759bc923ea7', 'xl-jvm-84ae1dd5c7ba2477'],
        'jvm-references': ['xl-jvm-0491da874c760dcb', 'xl-jvm-dc303cd4f57bf26f'],

        'data-access-sql': ['xl-mysql-99c96ef07445b064', 'xl-mysql-4a1c41629c1296fb', 'xl-mysql-d3041c3be5055113'],
        'data-access-jdbc': ['xl-spring-cbbb318810cd2d9b'],
        'data-access-prepared-statement': ['xl-spring-cbbb318810cd2d9b', 'xl-spring-0d14ac47cd09d69a'],
        'data-access-transaction': ['xl-mysql-349b3941a4a4eab9', 'xl-spring-cbbb318810cd2d9b'],
        'data-access-isolation': ['xl-mysql-cbc2341aea44980f', 'xl-mysql-f78b33ec3b9eb5b9', 'xl-mysql-3917b7541eedbe21'],
        // The JDBC lesson explicitly distinguishes DataSource, pooled close and transaction ownership.
        'data-access-connection-pool': ['xl-spring-cbbb318810cd2d9b'],
        'data-access-index': ['xl-mysql-7d90a482a9132a8a', 'xl-mysql-67026108142cfaf1', 'xl-mysql-8fe7c0d923f701fb'],
        // MyBatis material does not teach JPA persistence-context semantics, so ORM stays unmapped.

        'web-spring-http': ['xl-network-5e642d6c245fa24e', 'xl-network-377bd1519bd525d7', 'xl-network-5d8f6fadecd117e2'],
        'web-spring-ioc': ['xl-spring-6d4acaca43367b97', 'xl-spring-36206b976372618b', 'xl-spring-177f3998ca1441b7'],
        'web-spring-di': ['xl-spring-a7b49e6e7dce7e77', 'xl-spring-f81ff256662fa9da', 'xl-spring-a9219a8ac7735c67'],
        'web-spring-bean-lifecycle': ['xl-spring-bc44119982080c91', 'xl-spring-a3a59a98e5a9c72e', 'xl-spring-3818882853532cbc'],
        'web-spring-aop': ['xl-spring-6150d99906c49134', 'xl-spring-55e2648171f5f6c2', 'xl-spring-6197394b0b36a55a'],
        'web-spring-proxy': ['xl-spring-62b8256ea984518f', 'xl-spring-c65a10e474bed74c', 'xl-spring-c55043ee6273a1ed'],
        'web-spring-mvc': ['xl-spring-bf50223ad7fda36d', 'xl-spring-9e11e2a7dd8a1056', 'xl-spring-df1923a5e3911d8e'],
        'web-spring-transaction': ['xl-spring-6cf00a2fd10d3c20', 'xl-spring-85de96c8468ccf0f', 'xl-spring-4577871bf03c27be'],
        'web-spring-boot-auto-config': ['xl-spring-dc155633e2e39313', 'xl-spring-52eef6477c9839ba', 'xl-spring-d9c97308e4db3795'],

        'engineering-resource-boundaries': ['xl-java-825b00e8ded16cde'],
        'engineering-debugging': ['xl-jvm-57ad0f2a9c2d36b2', 'xl-jvm-9a41c9ea95b56aaa']
    };
}));
