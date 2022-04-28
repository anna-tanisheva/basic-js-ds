const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  if (!l) {
    return l;
  }
  //check the first node
  while (l.value === k) {
    l = l.next;
  }
  prevNode = null;
  thisNode = l;
  nextNode = thisNode.next;


  while (nextNode) {
    //check for doubled values if the current value === k and make previous node current if so.
    if (thisNode.value === k) {
      thisNode = prevNode;
      nextNode = thisNode.next;
    }

    if (nextNode.value === k) {
      thisNode.next = nextNode.next;
      if (!thisNode.next) {
        break;
      }
    }
    prevNode = thisNode
    thisNode = thisNode.next;
    nextNode = thisNode.next;
  }
  return l;
}

module.exports = {
  removeKFromList
};
