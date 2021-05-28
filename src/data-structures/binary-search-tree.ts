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

  /**
   * Searches for the provided key in the tree
   * @param key - the key to search for in the tree
   * @returns Returns 'true' if the key was found, otherwise 'false'
   */
  search(key: any) {
    return this.searchNode(this.root, key);
  }

  private searchNode(node: TNode | null, key: any): boolean {
    if (node == null) {
      return false;
    }

    const cmp = this.compareFn(key, node.key);
    switch (cmp) {
      case Compare.LESS_THAN:
        return this.searchNode(node.left, key);
      case Compare.BIGGER_THAN:
        return this.searchNode(node.right, key);
      default:
        return true;
    }

  //   if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
  //     return this.searchNode(node.left, key);
  //   } else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
  //     return this.searchNode(node.right, key);
  //   }
  //   // key is equal to node.item
  //   return true;
  }
}
