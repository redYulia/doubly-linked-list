"use strict";
const Node = require('./node');

class LinkedList {
    constructor(length /*= 0*/, _head /*= null*/, _tail /*= null*/) {
        length = typeof length !== 'undefined' ?  length : 0;
        _head = typeof _head !== 'undefined' ?  _head : null;
        _tail = typeof _tail !== 'undefined' ?  _tail : null;
        
        this.length = length;
        this._head = _head;
        this._tail = _tail;
    }

    append(data) {
        var node = data;
        console.log(node);
        if (this.length) {
            this._tail.next = node;
            node.prev = this._tail;
            this._tail = node;
        } else {
            this._head = node;
            this._tail = node;
        }
        this.length++; 
    }
    
    head() {
        return this._head;
    }

    tail() {
        return this._tail;
    }

    at(index) {}

    insertAt(index, data) {}

    isEmpty() {}

    clear() {}

    deleteAt(index) {}

    reverse() {}

    indexOf(data) {}
}
/*var node1 = new Node(42);
var node2 = new Node(123);
var node3 = new Node(413);

console.log("node1: ",node1);
var list1 = new LinkedList();
console.log("list: ",list1);
list1.append(node1);
console.log(list1.length);
console.log( list1._tail, list1._tail instanceof Node);
console.log( list1._head, list1._head instanceof Node);
list1.append(node2);
console.log(list1.length);
list1.append(node3);
console.log(list1.length, list1.tail(), list1.head());
console.log("append: ",list1);
console.log("head: ",list1.head());

console.log("tail: ",list1.tail());*/



module.exports = LinkedList;
