import Tree from '..';
import { TreeNode } from '../treeNode';

const tree = new Tree('one');
tree._root.children.push(new TreeNode('two'));
tree._root.children[0].parent = tree;

tree._root.children.push(new TreeNode('three'));
tree._root.children[1].parent = tree;

tree._root.children.push(new TreeNode('four'));
tree._root.children[2].parent = tree;

tree._root.children[0].children.push(new TreeNode('five'));
tree._root.children[0].children[0].parent = tree._root.children[0];

tree._root.children[0].children.push(new TreeNode('six'));
tree._root.children[0].children[1].parent = tree._root.children[0];

tree._root.children[1].children.push(new TreeNode('seven'));
tree._root.children[1].children[0].parent = tree._root.children[1];

test('tree-initial', () => {
  expect(tree._root.val).toBe('one');
  expect(tree._root.children[0].val).toBe('two');
  expect(tree._root.children[1].val).toBe('three');
  expect(tree._root.children[2].val).toBe('four');
  expect(tree._root.children[0].children[0].val).toBe('five');
  expect(tree._root.children[0].children[1].val).toBe('six');
  expect(tree._root.children[1].children[0].val).toBe('seven');
  expect(tree._root.parent).toBe(null);
});

test('tree-df', () => {
  const df = [];
  tree.traverseDF(treeNode => df.push(treeNode.val));
  expect(df).toEqual(['five', 'six', 'two', 'seven', 'three', 'four', 'one']);
});

test('tree-bf', () => {
  const bf = [];
  tree.traverseBF(treeNode => bf.push(treeNode.val));
  expect(bf).toEqual(['one', 'two', 'three', 'four', 'five', 'six', 'seven']);
});

test('tree-contains', () => {
  expect(tree.contains('four')).toBe(true);
  expect(tree.contains('zero')).toBe(false);
});

test('tree-add', () => {
  tree.add('child-of-one', 'one');
  tree.add('child-of-seven', 'seven');
  expect(tree._root.children[3].val).toBe('child-of-one');
  expect(tree._root.children[1].children[0].children[0].val).toBe(
    'child-of-seven',
  );
});

test('tree-remove', () => {
  tree.remove('child-of-one', 'one');
  tree.remove('child-of-seven', 'seven');
  expect(tree._root.children[3]).toBe(undefined);
  expect(tree._root.children[1].children[0].children[0]).toBe(undefined);
});
