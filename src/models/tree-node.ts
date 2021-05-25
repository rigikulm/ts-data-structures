/* eslint-disable no-useless-constructor */
/* eslint-disable no-empty-function */
// Represents a node in a tree

/**
 * TNode - models a Tree Node
 */
export default class TNode {
  left!: TNode;

  right!: TNode;

  // eslint-disable-next-line no-unused-vars
  constructor(public key: any) {}

  toString() {
    return `${this.key}`;
  }
}
