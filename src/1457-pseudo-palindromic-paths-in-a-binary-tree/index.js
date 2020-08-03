import { useState, useEffect } from 'react';
import get from 'lodash/get';

export const useFetch = ({
  request,
  query = {},
  depends = [],
  callback = () => {},
  requiredFields = [],
}) => {
  const [res, setRes] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    let didCancel = false;
    // 如果没有传入必填字段则不触发请求
    if (requiredFields.some((field) => query[field] == null)) {
      return;
    }

    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const res = await request(query);
        if (!didCancel) {
          setIsError(!get(res, 'success'));
          setRes(res);
          callback(get(res, 'response') || get(res, 'data'));
        }
      } catch (error) {
        if (!didCancel) {
          setIsError(true);
          setIsLoading(false);
        }
      }
      if (!didCancel) {
        setIsLoading(false);
      }
    };

    fetchData();
    return () => (didCancel = true);
  }, depends);

  return {
    res,
    isLoading,
    isError,
    data: get(res, 'response') || get(res, 'data'),
  };
};
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var pseudoPalindromicPaths = function (root) {
  let res = 0;
  dfs(root, []);
  return res;

  function dfs(node, path = []) {
    if (!node) return;
    path.push(node.val);
    if (!node.left && !node.right) {
      res += Number(isCool(path));
    }

    dfs(node.left, [...path]);
    dfs(node.right, [...path]);
  }

  function isCool(arr) {
    const foo = Array.from({ length: 9 }, () => 0);
    for (let n of arr) {
      foo[n - 1]++;
    }

    const temp = foo.filter((x) => x % 2 !== 0);

    return temp.length < 2;
  }
};
