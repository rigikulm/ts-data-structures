// Represents a node in a tree

/**
 * TNode - models a Tree Node
 */
export default class TNode {
    private key;
    private left: TNode | null;
    private right: TNode | null;
    constructor(key: any) {
        this.key = key;
        this.left = null;
        this.right = null;
    }

}