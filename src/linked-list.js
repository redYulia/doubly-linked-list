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
        var currentNode = this._head,
        length = this.length,
        i = 0;
        if (length === 0 || index < 0 || index > length) {
            console.log("node doesn't exist");
        }
        while (i < index) {
            currentNode = currentNode.next;
            i++;
        }
        return currentNode.data;
    }

    insertAt(index, data) {
        var currentNode = this._head,
        addingNode = new Node(data),
        length = this.length,
        i = 0,
        nodePrevToInsert = null,
        nodeNextToInsert = null,
        nodeToInsert = null,
        addedNode = null;
        if (length === 0 || index < 0 || index > length) {
            console.log("can't do it");
        }
        if (index === 0) {
            addingNode.next = this._head;
            this._head = addingNode;
            /*if (!this._head) {
                this._head.prev = null;
            } else {
                this._tail = null;
            }*/
        } 
        else if (index === this.length) {
            this.append(data);
            this.length--;
        } 
        else {
            while (i < index) {
                currentNode = currentNode.next;
                i++;
            }
            nodePrevToInsert = currentNode.prev;
            nodeToInsert = currentNode;
            nodePrevToInsert.next = addingNode;
            addingNode.prev = nodePrevToInsert;
            nodeToInsert.prev = addingNode;
            addingNode.next = nodeToInsert;
        }
        this.length++;
    }

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

    deleteAt(index) {
        var currentNode = this._head,
        length = this.length,
        i = 0,
        nodePrevToDelete = null,
        nodeNextToDelete = null,
        nodeToDelete = null,
        deletedNode = null;
        if (length === 0 || index < 0 || index > length) {
            console.log("can't do it");
        }
        if (index === 0) {
            this._head = currentNode.next;
            if (!this._head) {
                this._head.prev = null;
            } else {
                this._tail = null;
            }
        } 
        else if (index === this.length-1) {
            this._tail = this._tail.prev;
            this._tail.next = null;
        } 
        else {
            while (i < index) {
                currentNode = currentNode.next;
                i++;
            }
            nodePrevToDelete = currentNode.prev;
            nodeToDelete = currentNode;
            nodeNextToDelete = currentNode.next;
            nodePrevToDelete.next = nodeNextToDelete;
            nodeNextToDelete.prev = nodePrevToDelete;
            deletedNode = nodeToDelete;
            nodeToDelete = null;
        }
        this.length--;
    }

    reverse() {}

    indexOf(data) {}
}
var list1 = new LinkedList();
console.log("list: ",list1, list1.isEmpty());
list1.append(32);
list1.append(47);
console.log("list: ",list1, list1.isEmpty());
console.log(list1.at(1));
list1.insertAt(1, 34);
console.log(list1.at(1));
/*list1.append(123);
console.log("list: ",list1);
list1.append(413);
console.log("append: ",list1);

console.log("head: ",list1.head());
console.log("tail: ",list1.tail());*/




module.exports = LinkedList;
