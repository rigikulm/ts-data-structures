import { expect } from 'chai';
import { BinarySearchTree } from '../../src/index';

type NodeValue = number | null;
/**
 * Validates a Tree Node against the provided values
 * @param node - the Tree Node
 * @param key - the expected key
 * @param left - the expected left node or undefined
 * @param right - the expected right node or undefined
 */
function assertNode(node: any, key: number, left: NodeValue = null, right: NodeValue = null) {
  if (key != null) {
    expect(node.key).to.equal(key);
  } else {
    expect(node).to.equal(key);
    return;
  }

  if (left != null) {
    expect(node.left.key).to.equal(left);
  } else {
    expect(node.left).to.equal(left);
  }

  if (right != null) {
    expect(node.right.key).to.equal(right);
  } else {
    expect(node.right).to.equal(right);
  }
}

describe('BinarySearchTree unit tests', () => {
  let bst: BinarySearchTree;

  it('Should initially have no root', () => {
    bst = new BinarySearchTree();
    expect(bst.getRoot()).to.be.null;
  });

  it('Should have a root but no children', () => {
    const key = 7;
    bst = new BinarySearchTree();
    bst.insert(key);
    console.log(bst.getRoot());
    assertNode(bst.getRoot(), key, null, null);
  });

  it('Should have a root and correct left node', () => {
    const key = 7;
    const left = 5;
    bst = new BinarySearchTree();
    bst.insert(key);
    bst.insert(left);
    console.log(bst.getRoot());
    assertNode(bst.getRoot(), key, left, null);
  });

  it('Should have a root and correct right node', () => {
    const key = 7;
    const left = 5;
    const right = 9;
    bst = new BinarySearchTree();
    bst.insert(key);
    bst.insert(left);
    bst.insert(right);
    console.log(bst.getRoot());
    assertNode(bst.getRoot(), key, left, right);
  });

  it('Should have a root and correct left node and left child', () => {
    const key = 7;
    const left = 5;
    const child = 3;
    bst = new BinarySearchTree();
    bst.insert(key);
    bst.insert(left);
    bst.insert(child);
    console.log(bst.getRoot());
    assertNode(bst.getRoot(), key, left);
    assertNode(bst.getRoot().left, left, child);
  });

  it('Search should not find key in empty tree', () => {
    const key = 7;
    bst = new BinarySearchTree();
    expect(bst.search(key)).to.be.false;
  });

  it('Search should find root key', () => {
    const key = 7;
    const left = 5;
    const right = 9;
    bst = new BinarySearchTree();
    bst.insert(key);
    bst.insert(left);
    bst.insert(right);
    expect(bst.search(key)).to.be.true;
  });

  it('Search should find child keys', () => {
    const key = 7;
    const left = 5;
    const right = 9;
    bst = new BinarySearchTree();
    bst.insert(key);
    bst.insert(left);
    bst.insert(right);
    expect(bst.search(left)).to.be.true;
    expect(bst.search(right)).to.be.true;
  });
});
