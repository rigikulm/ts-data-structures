/* eslint-disable import/no-unresolved */
import { expect } from 'chai';
import TNode from '../../src/models/tree-node';

describe('TNode unit tests', () => {
  let tnode: TNode;

  it('Starts without left or right nodes', () => {
    tnode = new TNode({});
    expect(tnode.left).to.be.undefined;
    expect(tnode.right).to.be.undefined;
  });

  it('Displays a string version of the key', () => {
    tnode = new TNode('mykey');
    expect(`${tnode}`).to.be.equal('mykey');
  });
});
