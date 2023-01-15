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
};