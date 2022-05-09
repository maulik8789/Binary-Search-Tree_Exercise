class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    let node = this.root;
    if(this.root == null){
      this.root = new Node(val);
      return;
    }
    else{

      let searchPlace = (node) => {
        if(node.val < val){
          if(!node.right){
            node.right = new Node(val);
            return;
          }
          else if(node.right){
            return searchPlace(node.right);
          }
        }
        else if(node.val > val){
          if(!node.left){
            node.left = new Node(val);
            return;
          }
          else if(node.left){
            return searchPlace(node.left);
          }
        }
        else{
          return null;
        }
      };
      return searchPlace(node);
    }
    
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val) {
    this.insert(val);
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let node = this.root;
    
    // console.log(this.root)
    while(node.val != val){
      // if(node.val == val) return node;
      if(node != null && node.val > val){
        node = node.left;
      }
      else if(node != null &&  node.val < val){
        node = node.right;
      }
      if(node == null){
        return undefined;
      }
    }
    
    return node;
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {
    let node = this.root

    let findVal = (node) => {
      if(node == null){
        return undefined;
      }
      
      if(node.val == val){
        return node;
      }
      else if(node.val > val){
        return findVal(node.left);
      }
      else if(node.val < val){
        return findVal(node.right)
      }
      
    }


    return findVal(node)
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    let node = this.root;
    let answer = [];
    let traverse = (node) => {
      answer.push(node.val);
      if (node.left){
        traverse(node.left);
      }
      if (node.right) traverse(node.right);
      
      return answer;
    }
    return traverse(node) 
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    let node = this.root;
    let answer = [];
    let traverse = (node) => {
      if (node.left){
        traverse(node.left);
      }
      answer.push(node.val);

      if (node.right) traverse(node.right);
      
      return answer;
    }
    return traverse(node)
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    let node = this.root;
    let answer = [];
    let traverse = (node) => {
      if (node.left){
        traverse(node.left);
      }
      if (node.right) traverse(node.right);
      answer.push(node.val);
      
      return answer;
    }
    return traverse(node)
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    if(this.root == null) return null;

    let answer = [];
    let q = [];
    q.push(this.root);
console.log("queue", q)
    while(q.length > 0) {
      let node = q.shift();
      // console.log(node);
      answer.push(node.val);
      if (node.left){
        q.push(node.left);
      }
      if (node.right) {
        q.push(node.right);
      }

    }
    console.log(answer)
    return answer;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  // remove(val) {
    
  // }



  /** Further Study!
  //  * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  // isBalanced() {

  // }

  // /** Further Study!
  //  * findSecondHighest(): Find the second highest value in the BST, if it exists.
  //  * Otherwise return undefined. */

  // findSecondHighest() {
    
  // }
}

module.exports = BinarySearchTree;
