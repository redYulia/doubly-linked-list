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
        return this;
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
        length = this.length;
        if (length === 0 || index < 0 || index > length) {
            console.log("node doesn't exist");
        }
        for (var i=0; i < index; i++) {
            currentNode = currentNode.next;
        }
        return currentNode.data;
    }

    insertAt(index, data) {
        var currentNode = this._head,
        addingNode = new Node(data),
        length = this.length,
        nodePrevToInsert = null,
        nodeNextToInsert = null,
        nodeToInsert = null,
        addedNode = null;
        if (index < 0 || index > length) {
            console.log("can't do it");
        }
        if (index === 0) {
            addingNode.next = this._head;
            this._head = addingNode;
            if (length == 0) {
                this._tail = addingNode;
            } else {
                this._head.prev = null;
            }
        } 
        else if (index === this.length) {
            this.append(data);
            this.length--;
        } 
        else {
            for (var i=0; i < index; i++)  {
                currentNode = currentNode.next;
            }
            nodePrevToInsert = currentNode.prev;
            nodeToInsert = currentNode;
            nodePrevToInsert.next = addingNode;
            addingNode.prev = nodePrevToInsert;
            nodeToInsert.prev = addingNode;
            addingNode.next = nodeToInsert;
        }
        this.length++;
        return this;
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
        return this;
    }

    deleteAt(index) {
        var currentNode = this._head,
        length = this.length,
        nodePrevToDelete = null,
        nodeNextToDelete = null,
        nodeToDelete = null,
        deletedNode = null;
        console.log(index, length);
        if (length === 0 || index < 0 || index > length) {
            console.log("can't do it");
        }
        if (index === 0) {
            this._head = currentNode.next;
            if (length == 1) {
                this._tail = null;
                this._head = null;
            } else {
                this._head.prev = null;
                
            }
        } 
        else if (index === this.length-1) {
            this._tail = this._tail.prev;
            this._tail.next = null;
        } 
        else {
            for (var i=0; i < index; i++) {
                currentNode = currentNode.next;
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
        return this;
    }

    reverse() {
        var currentNode = this._head,
        tempNode = null,
        length = this.length;
        
        if (length !== 1) {
            for (var i = 0; i < length; i++) {
                tempNode = currentNode.prev;
                currentNode.prev = currentNode.next;
                currentNode.next = tempNode;
                currentNode = currentNode.prev;
            }
        }
        
        tempNode = this._head;
        this._head = this._tail;
        this._tail = tempNode;
        return this;
    }

    indexOf(data) {
        var currentNode = this._head,
        length = this.length,
        found = false;
        for (var i = 0; i < length; i++) {
            if (currentNode.data == data) {
                found = true;
                return i;
            }
            else {
                currentNode = currentNode.next;
            }
        }
        if (!found) {
            return -1;
        }
        
    }
}



module.exports = LinkedList;
