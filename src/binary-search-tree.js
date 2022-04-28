const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode
  }

  add(data) {
    this.rootNode = insert(this.rootNode, data);

    function insert(node, data) {
      if (!node) {
        return new Node(data)
      }

      if (node.data === data) {
        return node;
      }

      if (node.data > data) {
        node.left = insert(node.left, data);
      } else {
        node.right = insert(node.right, data)
      }
      return node;
    }
  }

  has(data) {
    return search(this.rootNode, data);

    function search(node, data) {
      if (!node) {
        return false;
      }

      if (node.data === data) {
        return true;
      }

      if (node.data > data) {
        return search(node.left, data)
      } else {
        return search(node.right, data)
      }
    }
  }

  find(data) {
    return searchData(this.rootNode, data)

    function searchData(node, data) {
      if (!node) {
        return null;
      }

      if (node.data === data) {
        return node;
      }

      if (node.data > data) {
        return searchData(node.left, data)
      } else {
        return searchData(node.right, data)
      }
    }
  }

  remove(data) {
    this.rootNode = removeNode(this.rootNode, data);

    function removeNode(node, data) {
      if (!node) {
        return null;
      }

      if (node.data > data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (node.data < data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }

        if (!node.left) {
          node = node.right;
          return node;
        }

        if (!node.right) {
          node = node.left;
          return node;
        }

        let minRight = node.right;
        while (minRight.left) {
          minRight = minRight.left;
        }
        node.data = minRight.data;

        node.right = removeNode(node.right, minRight.data);

        return node;
      }
    }
  }

  min() {
    if (!this.rootNode) {
      return;
    }

    let minNode = this.rootNode;
    while (minNode.left) {
      minNode = minNode.left;
    }
    return minNode.data
  }

  max() {
    if (!this.rootNode) {
      return
    }

    let maxNode = this.rootNode;
    while (maxNode.right) {
      maxNode = maxNode.right;
    }
    return maxNode.data
  }
}

module.exports = {
  BinarySearchTree
};