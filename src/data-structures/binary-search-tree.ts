/* eslint-disable no-param-reassign */
// Binary Search Tree Class
import TNode from '../models/tree-node';
import { ICompareFunction, Compare, defaultCompare } from '../lib/utils';

export default class BinarySearchTree {
  protected root: TNode | null = null;

  /**
   * Initializes a BinarySearchTree instance
   * @param {function} [compareFn] - Compare function to be used for sorting the keys in the tree
   */
  constructor(protected compareFn = defaultCompare) {
    this.compareFn = compareFn;
  }

  /**
   * Insert an item into the binary tree
   * @param {Object} key - Item to be inserted into the tree
   */
  insert(key: any) {
    if (this.root === null) {
      this.root = new TNode(key);
    } else {
      this.insertNode(this.root, key);
    }
  }

  protected insertNode(node: TNode, key: any) {
    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      if (node.left === null) {
        node.left = new TNode(key);
      } else {
        this.insertNode(node.left, key);
      }
    } else if (node.right === null) {
      node.right = new TNode(key);
    } else {
      this.insertNode(node.right, key);
    }
  }

  /**
   * Returns the root of the tree
   * @returns root object or null if no items in the tree
   */
  getRoot(): any {
    return this.root;
  }
}
