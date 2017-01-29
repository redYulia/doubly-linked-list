const Node = require('./node');

class LinkedList {
    constructor(_length = 0, head = null, tail = null) {
        this._length = _length;
        this.head = head;
        this.tail = tail;
    }

    append(data) {
        var node = data;
        console.log(node);
        if (this._length) {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        } else {
            this.head = node;
            this.tail = node;
        }
        this._length++; 
        return node;
    }
    
    head() {
        return this.head;
    }

    tail() {
        return this.tail;
    }

    at(index) {}

    insertAt(index, data) {}

    isEmpty() {}

    clear() {}

    deleteAt(index) {}

    reverse() {}

    indexOf(data) {}
}
/*var node1 = new Node("grgrg", null, null);
var node2 = new Node(33, null, null);
var node3 = new Node(88, null, null);
var node4 = new Node(55, null, null);

console.log("node1: ",node1);
var list1 = new LinkedList();
console.log("list: ",list1);
list1.append(node1);
list1.append(node2);
list1.append(node3);
list1.append(node4);
console.log("append: ",list1);

console.log("head: ",list1.head);

console.log("tail: ",list1.tail);*/



module.exports = LinkedList;
