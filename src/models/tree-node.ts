/* eslint-disable no-useless-constructor */
/* eslint-disable no-empty-function */
// Represents a node in a tree

/**
 * TNode - models a Tree Node
 */
export default class TNode {
  left: TNode | null;

  right: TNode | null;

  // eslint-disable-next-line no-unused-vars
  constructor(public key: any) {
    this.left = null;
    this.right = null;
  }

  toString() {
    return `${this.key}`;
  }
}
