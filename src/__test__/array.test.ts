import { expect, test } from "vitest";
import { _cluster } from "../util/index";
test('测试_cluster', () => {
  expect(_cluster([1, 2, 3, 4, 5, 6, 7], 3)).toEqual([[1, 2, 3], [4, 5, 6], [7]]);
});
