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
        var node = new Node(data);
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
        if (this.length) {
            return this._head.data;
        } else {
            return null;
        }
    }

    tail() {
        if (this.length) {
            return this._tail.data;
        } else {
            return null;
        }
    }

    at(index) {
        
    }

    insertAt(index, data) {}

    isEmpty() {
        if (this.length) {
            return false;
        }
        else {
            return true;
        }
    }

    clear() {
        this.length = 0;
        this._head = null;
        this._tail = null;
    }

    deleteAt(index) {}

    reverse() {}

    indexOf(data) {}
}
var list1 = new LinkedList();
console.log("list: ",list1, list1.isEmpty());
list1.append(42);
console.log("list: ",list1, list1.isEmpty());
list1.clear();
console.log(list1, list1.head(), list1.tail());
/*list1.append(123);
console.log("list: ",list1);
list1.append(413);
console.log("append: ",list1);

console.log("head: ",list1.head());
console.log("tail: ",list1.tail());*/




module.exports = LinkedList;
