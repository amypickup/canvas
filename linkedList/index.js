/**
 * Linked List Implementation
 * 
 * O(1) lookup, insertion, deletion at ends or next to a node you have a pointer to
 * 
 * Uses:
 * Maintains relative ordering (stacks + queues), does NOT offer random lookup
 * Little variation in implementation
 * Demonstrate understanding of pointers + references
 * 
 * Types:
 * Singly Linked List (points to next node only, must maintain head pointer)
 * Doubly Linked List (each node points to next + previous node, problems become trivial)
 * Circular (deal w/ cycle avoidance, must track head, or infinite traversal)
 * 
 * Common Problems:
 * Insertion, Deletion
 * Traversal
 * Maintaining Pointers, Tracking the head element
 */

// LINKED LIST CLASSES (LinkedList + Node)
class LinkedList {
	constructor(head=null) {
    this.head = head;
  }
}

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// INSERTION AND DELETION

// insert at head 
// Note *be careful to track head *must return new head
const insertInFront = (list, data) => {
  let newNode = new Node(data);
  newNode.next = list.head;
  return newNode;
}

// insert at end and return new end node
const insertAtEnd = (list, data) => {
  let newNode = new Node(data);
  let endNode = getEndNode(list);
  endNode.next = newNode;
  // may not be necessary to return this node
  // or helpful to return new length of list, need to look
  return newNode;
}

// insert 


// TRAVERSAL

const getEndNode = (list) => {
  let current = list;

  // handle null node case, may not be necessary
  if(current == null) {
    return;
  }

  // iterate through list until finding node where next is null
  while(current.next !== null) {
    return current.next;
  }
  return current;
}


// Testing Ground

let n1 = new Node(10);
let n2 = new Node(11);
let n3 = new Node(12);

let myList = new LinkedList(n3);
let newList = insertInFront(myList, 9);

let lastNode = getEndNode(newList);

let bigList = insertAtEnd(newList, 13);

console.log(newList);
console.log(lastNode);
console.log(bigList);
