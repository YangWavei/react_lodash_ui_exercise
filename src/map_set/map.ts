// Map 数据结构 类似于对象，属于键值对结构，但与对象不同的是
// Map可以使用任意类型的数据作为 `键` ，而对象传统上只能使用字符串

// 作为 `键`
export const demo01 = () => {
  const m = new Map();
  const o = { p: 'Hello,world!' };
  // map 对象 m，它的键是对象 o,值为字符串 'content'
  m.set(o, 'content');
  console.log(m);
  for (const [k, v] of m) {
    console.log('k=', k, `v=`, v);
  }
  // 根据键获取Map集合中的值
  console.log(m.get(o));
  //根据键 判断map集合中是否有对应值
  console.log(m.has(o));
  // 删除集合中的键值对
  m.delete(o);
  // returns undefined
  console.log(m.get(o));

  const array: [string | Object, string][] = [
    [{ userName: '前进四' }, '张三'],
    ['title', 'Author']
  ];
  // map 对象可以接收一个数组作为参数
  // 该数组的成员是一个个表示键值对的数组
  const map = new Map(array);
  console.log(map.keys());
  console.log(map.values());

  // above core 
  const map2 = new Map();
  array.forEach(([k, v]) => map2.set(k, v));
  console.log(`============== map2 ============================`);
  console.log(map2.keys());
  console.log(map2.values());
  console.log(map2.entries());
  /* -------------------------------------------------------------------------- */

  const set = new Set<[string, number]>([
    ['foo', 1],
    ['bar', 2]
  ]);

  // in fact ，任何具有 `Iterator` 接口、且每个成员都是一个双元素的
  // 数组的数据结构，都可以来当做 Map 构造函数的参数，so=> Map & Set
  // 都可以用来生成新的 Map
  const m1 = new Map(set);
  console.log(m1.get('foo'));
  console.log(m1.keys());
  console.log(m1.values());
  /* -------------------------------------------------------------------------- */
  // 对一个键多次赋值，后来者居上
  m1.set('foo', 3);
  console.log(m1.get('foo'));
  m1.set('foo', 99);
  console.log(m1.get('foo'));
  /* -------------------------------------------------------------------------- */

  const map3 = new Map();
  const k1 = ['a'];
  const k2 = ['a'];
  // 以上两个键的值相同，但是属于不同的引用，so=>
  // 在 Map 结构中被视为两个不同的键
  map3.set(k1, 111).set(k2, 222);
  console.log(`output->map3.get(k1)`, map3.get(k1));
  console.log(`output->map3.get(k2)`, map3.get(k2));
  console.log(0 === -0);
  /* -------------------------------------------------------------------------- */

  // set 方法返回的是当前的 Map 对象，因此可以采用链式写法
  const map4 = new Map<undefined | string | null, string>();
  map4
    .set(undefined, 'a')
    .set('uuimorty', 'github')
    .set(null, '奥');
  mapLog(map4);
};

// 现在类型不确定，使用时才确定类型，这种情况下适合使用泛型
const mapLog = <K, V>(map: Map<K, V>) => {
  console.log(`keys=`, map.keys());
  console.log(`values=`, map.values());
};

/**
 * Map 数据结构的遍历 method
 */
export const demo02 = () => {
  const arr: [string, string][] = [
    ['F', 'no'],
    ['Y', 'yes']
  ];
  const map = new Map(arr);
  for (const item of map.keys()) console.log(item);
  for (const item of map.values()) console.log(item);
  for (const [k, v] of map.entries()) console.log(k, v);
  /* -------------------------------------------------------------------------- */
  const map2 = new Map([
    [1, 'one'],
    [2, 'two'],
    [3, 'three'],
  ]);
  // map 结构转为数组结构，最快的方式
  const keysArray = [...map2.keys()];
  console.log("🚀 ~ demo02 ~ keysArray:", keysArray);
  const valuesArray = [...map2.values()];
  console.log("🚀 ~ demo02 ~ valuesArray:", valuesArray);

  //实现 Map 的遍历和过滤
  const map0 = new Map()
    .set(1, 'a')
    .set(2, 'b')
    .set(3, 'c');
  const _map1 = new Map([...map0].filter(([k, v]) => k > 1 && v === 'c'));
  console.log(_map1);

  const _map2 = new Map([...map0].map(([k, v]) => [k * 2, v + '0.o']));
  console.table(_map2);



  map0.forEach(function (value, key) {
    console.log("Key: %s, Value: %s", key, value);
  });

  const reporter = {
    report: function <T, V>(key: T, value: V) {
      console.log("Key: %s, Value: %s", key, value);
    }
  };

  // map 的 forEach 方法还可以接收第二个参数，用来绑定 `this`
  map0.forEach(function (this: typeof reporter, value, key) {
    this.report(key, value);
  }, reporter);

  let count = 0;

  const _2DArray = new Array(4).fill(0).map(() => new Array(5).fill(0).map(() => ++count));

  console.log("🚀 ~ demo02 ~ _2DArray:", _2DArray);

};


/** Map 与其他数据进行结构转换 */
export const demo03 = () => {
  // 1.Map 转数组 ()
  const myMap1 = new Map();
  myMap1.set(true, '1')
    .set({ userName: '张三' }, ['alice', 'oliver']);
  const convertArray1 = [...myMap1];
  console.log("🚀 ~ demo03 ~ convertArray:", convertArray1);
  /* -------------------------------------------------------------------------- */

  type I_TempArr = Object | string;
  // 2.数组转Map
  const tempArr: [I_TempArr, I_TempArr][] = [
    [{ avatar: 'tom cat', age: 20 }, '小飞'],
    ['南岸', { yes: true }]
  ];
  const myMap2 = new Map(tempArr);
  console.log(myMap2);
  console.log(myMap2.values());
  /* -------------------------------------------------------------------------- */

  // 3.对象转为 Map
  const myObj = { a: 1, b: 2 };
  const myMap3 = new Map(Object.entries(myObj));
  console.log(myMap3);
  console.log(myMap3.keys(), myMap3.values());
  /* -------------------------------------------------------------------------- */
  // 4.Map 转为JSON
  const myMap4 = new Map().set('yes', true).set('no', false);
  console.log(strMapToJson(myMap4));

};

/** 转为对象json */
function strMapToJson<T extends string | number | symbol, V>(strMap: Map<T, V>): string {
  const obj: Record<T, V> = {} as Record<T, V>;
  for (const [key, value] of strMap) {
    obj[key] = value;
  }
  return JSON.stringify(obj);
}

/** 
 * @description map转为数组json 
 * @returns 二位数组字符串
*/
export function mapToArrayJson<T, V>(map: Map<T, V>) {
  return JSON.stringify([...map]);
}
