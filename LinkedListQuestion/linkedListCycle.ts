 class ListNode {
         val: number
         next: ListNode | null
         constructor(val?: number, next?: ListNode | null) {
             this.val = (val===undefined ? 0 : val)
             this.next = (next===undefined ? null : next)
         }
}



function detectCycle(head: ListNode | null): ListNode | null {
    //  okay at least i know i am going to need to use the two pointer technique considering we have a linked list and we need to detect where the cycle begins 
    //  from memory i reconize that we will need to run the cycle detection  function twice, once to determine where the two will meet and then a second around where we start a new pointer at the begining of the list and then another pointer where the cycle began, then wherever these two meet is where the cycle has actually began 

    // steps 

};