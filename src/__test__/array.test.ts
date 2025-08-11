import { expect, test } from "vitest";
import {
  _alphabetical,
  _boil,
  _cluster,
  _cluster2,
  _cluster3,
  _cluster4,
  _counting,
  _counting2,
  _counting3,
  _diff,
  _diff2,
  _diff3,
  _diff4,
  _flat,
  _flat2,
  _flat3
} from "../util/radash/array";

// 测试 _alphabetical 函数
test('_alphabetical - 按字母顺序升序排序', () => {
  const items = [{ name: 'Charlie' }, { name: 'Alice' }, { name: 'Bob' }];
  const result = _alphabetical(items, item => item.name);
  expect(result).toEqual([{ name: 'Alice' }, { name: 'Bob' }, { name: 'Charlie' }]);
});

test('_alphabetical - 按字母顺序降序排序', () => {
  const items = [{ name: 'Charlie' }, { name: 'Alice' }, { name: 'Bob' }];
  const result = _alphabetical(items, item => item.name, 'desc');
  expect(result).toEqual([{ name: 'Charlie' }, { name: 'Bob' }, { name: 'Alice' }]);
});

// 测试 _boil 函数
test('_boil - 查找最大值', () => {
  const numbers = [3, 1, 4, 1, 5, 9, 2, 6];
  const result = _boil(numbers, (a, b) => (a > b ? a : b));
  expect(result).toBe(9);
});

test('_boil - 空数组返回 null', () => {
  const result = _boil([], (a, b) => (a > b ? a : b));
  expect(result).toBeNull();
});

test('_boil - null 输入返回 null', () => {
  const result = _boil(null as any, (a: number, b: number) => (a > b ? a : b));
  expect(result).toBeNull();
});

// 测试 _cluster 函数系列
test('_cluster - 将数组分割成指定大小的块', () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7];
  const result = _cluster(numbers, 3);
  expect(result).toEqual([[1, 2, 3], [4, 5, 6], [7]]);
});

test('_cluster - 空数组返回空数组', () => {
  const result = _cluster([]);
  expect(result).toEqual([]);
});

test('_cluster2 - 将数组分割成指定大小的块', () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7];
  const result = _cluster2(numbers, 3);
  expect(result).toEqual([[1, 2, 3], [4, 5, 6], [7]]);
});

test('_cluster3 - 将数组分割成指定大小的块', () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7];
  const result = _cluster3(numbers, 3);
  expect(result).toEqual([[1, 2, 3], [4, 5, 6], [7]]);
});

test('_cluster4 - 将数组分割成指定大小的块', () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7];
  const result = _cluster4(numbers, 3);
  expect(result).toEqual([[1, 2, 3], [4, 5, 6], [7]]);
});

// 测试 _counting 函数系列
test('_counting - 统计数组中元素出现次数', () => {
  const items = ['a', 'b', 'a', 'c', 'b', 'a'];
  const result = _counting(items, item => item);
  expect(result).toEqual({ a: 3, b: 2, c: 1 });
});

test('_counting - 空数组返回 null', () => {
  const result = _counting([], item => item);
  expect(result).toBeNull();
});

test('_counting2 - 统计数组中元素出现次数', () => {
  const items = ['a', 'b', 'a', 'c', 'b', 'a'];
  const result = _counting2(items, item => item);
  expect(result).toEqual({ a: 3, b: 2, c: 1 });
});

test('_counting3 - 统计数组中元素出现次数', () => {
  const items = ['a', 'b', 'a', 'c', 'b', 'a'];
  const result = _counting3(items, item => item);
  expect(result).toEqual({ a: 3, b: 2, c: 1 });
});

// 测试 _diff 函数系列
test('_diff - 找出第一个数组中存在但第二个数组中不存在的元素', () => {
  const first = [1, 2, 3, 4, 5];
  const second = [3, 4, 5, 6, 7];
  const result = _diff(first, second);
  expect(result).toEqual([1, 2]);
});

test('_diff2 - 找出第一个数组中存在但第二个数组中不存在的元素', () => {
  const first = [1, 2, 3, 4, 5];
  const second = [3, 4, 5, 6, 7];
  const result = _diff2(first, second);
  expect(result).toEqual([1, 2]);
});

test('_diff3 - 找出第一个数组中存在但第二个数组中不存在的元素', () => {
  const first = [1, 2, 3, 4, 5];
  const second = [3, 4, 5, 6, 7];
  const result = _diff3(first, second);
  expect(result).toEqual([1, 2]);
});

test('_diff4 - 找出第一个数组中存在但第二个数组中不存在的元素', () => {
  const first = [1, 2, 3, 4, 5];
  const second = [3, 4, 5, 6, 7];
  const result = _diff4(first, second);
  expect(result).toEqual([1, 2]);
});

test('_diff - 非数组参数抛出错误', () => {
  expect(() => {
    _diff("not an array" as any, []);
  }).toThrow("输入参数类型必须为 Array");
});

test('_diff2 - 非数组参数抛出错误', () => {
  expect(() => {
    _diff2("not an array" as any, []);
  }).toThrow("参数类型错误");
});

test('_diff3 - 非数组参数抛出错误', () => {
  expect(() => {
    _diff3("not an array" as any, []);
  }).toThrow("参数类型错误");
});

test('_diff4 - 非数组参数抛出错误', () => {
  expect(() => {
    _diff4("not an array" as any, []);
  }).toThrow("参数错误");
});

// 测试 _flat 函数系列
test('_flat - 扁平化数组', () => {
  const nested = [1, [2, 3], 4, [5, [6, 7]]];
  const result = _flat(nested);
  expect(result).toEqual([1, 2, 3, 4, 5, [6, 7]]);
});

test('_flat2 - 扁平化二维数组', () => {
  const nested = [[1, 2], [3, 4], [5, 6]];
  const result = _flat2(nested);
  expect(result).toEqual([1, 2, 3, 4, 5, 6]);
});

test('_flat3 - 扁平化二维数组', () => {
  const nested = [[1, 2], [3, 4], [5, 6]];
  const result = _flat3(nested);
  expect(result).toEqual([1, 2, 3, 4, 5, 6]);
});
