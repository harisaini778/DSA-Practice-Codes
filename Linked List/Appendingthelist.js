class Node{
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
}

const myList = new LinkedList();

myList.append(10);
myList.append(20);
myList.append(30);
myList.append(40);

const printLinkedList =(list)=>{
    let current = list.head;
    while (current) {
        console.log(current.data);
        current = current.next;
    }
    console.log("The size of the linkedlist is : ",list.size)
}

printLinkedList(myList);