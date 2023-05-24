//Definition for singly-linked list.
function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
 };
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let head = new ListNode(0,null);
    let tail = new ListNode(0, head);
    let deadNode = new ListNode(0, null);
    let carry = 0;
    let remainder = 0;
    let added = 0;

    while(tail.next != null){
        //find the value of the current place
        let newNode = new ListNode(0,null);
        added = l1.val + l2.val + carry;
        remainder = added % 10;
        newNode.val = remainder;
        if(added > 9){
            carry = 1;
        }
        else{
            carry = 0;
        }
        
        //add to result list and then move on to next node
        if(head.next == null){
            head.next = newNode;
        }
        else{
            tail = tail.next;
        }
        tail.next = newNode;

        //check if there are digits left in the list, if not then use zero
        if(l1.next == null && l2.next == null){
            if(carry == 1){//make sure to add the final floating carry, lists will be empty.
                let finalNode = new ListNode(carry, null);
                tail = tail.next;
                tail.next = finalNode;
                return head.next;
            }
            else{
                return head.next;// stops if both source lists are empty
            }
        }
        if(l1.next == null){
            l1 = deadNode;
        }
        else{
            l1 = l1.next;
        }
        if(l2.next == null){
            l2 = deadNode;
        }
        else{
            l2 = l2.next;
        }
    }
        
    return head.next;
};
/**
 * @param {long} num
 * @return {ListNode}
 */
var longToLinkedListReverseOrder = function(num){
    let head = new ListNode();
    let tail = new ListNode();

    if(num == 0){
        head.val = 0;
        return head;
    }

    while(num != 0){
        let newNode = new ListNode((num % 10), null);
        if(head.next == null){
            head.next = newNode;
        }
        else{
            tail.next = newNode;
        }
        tail = newNode;
        num = Math.floor(num / 10);
    }
    return head.next;
};

//test cases
let tester1 = 123;

let head = longToLinkedListReverseOrder(tester1);
let tail = head;

console.log("Head1: ");
while(tail.next != null){
    process.stdout.write(tail.val + ", ");
    tail = tail.next;
}
console.log(tail.val);


let tester2 = 1123;

let head2 = longToLinkedListReverseOrder(tester2);
let tail2 = head2;

console.log("Head2: ");
while(tail2.next != null){
    process.stdout.write(tail2.val + ", ");
    tail2 = tail2.next;
}
console.log(tail2.val);

let result = addTwoNumbers(head, head2);
///*
let tail3 = result;

console.log("Result: ");
while(tail3.next != null){
    process.stdout.write(tail3.val + ", ");
    tail3 = tail3.next;
}
console.log(tail3.val);
//*/