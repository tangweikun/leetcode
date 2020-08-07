/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSubPath = function (head, root) {
  if (head === null) return true;
  if (root === null) return false;
  return (
    dfs(head, root) || isSubPath(head, root.left) || isSubPath(head, root.right)
  );

  function dfs(currentHead, node) {
    if (currentHead == null) return true; // 链表已经全部匹配完，匹配成功
    if (node === null) return false; // 二叉树访问到了空节点，匹配失败
    if (node.val !== currentHead.val) return false; // 当前匹配的二叉树上节点的值与链表节点的值不相等，匹配失败
    return (
      dfs(currentHead.next, node.left) || dfs(currentHead.next, node.right)
    );
  }
};
