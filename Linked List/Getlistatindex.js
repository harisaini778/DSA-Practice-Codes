class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList{
    constructor() {
        this.head = null;
        this.size = 0;
    }
    append(data) {
       
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;   
    }
    
    get(index) {
        if (index < 0 || index >= this.size) {
            return null;
        }
        let current = this.head;
        for (let i = 0; i < index; i++){
            current = current.next; 
        }
        return current.data;
    }
}
const myList = new LinkedList();

myList.append(10);
myList.append(20);
myList.append(30);
myList.append(40);


const printLinkedList = (list) => {
    let current = list.head;
    while (current) {
        console.log(current.data);
        current = current.next;
    }
    console.log("size of the linked list is: " + list.size);
}

printLinkedList(myList);


const elementAtIndex = myList.get(4);
console.log("the data at the index is : ",elementAtIndex);