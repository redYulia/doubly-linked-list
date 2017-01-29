"use strict";
class Node {
    constructor(data /*= null*/, prev /*= null*/, next /*= null*/) {
        data = typeof data !== 'undefined' ?  data : null;
        prev = typeof prev !== 'undefined' ?  prev : null;
        next = typeof next !== 'undefined' ?  next : null;
        
        this.data = data;
        this.prev = prev;
        this.next = next;
    }
}
module.exports = Node;
