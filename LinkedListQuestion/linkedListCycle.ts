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

    // steps for the solution:
        //? we will have a helper function that will return to us where the two pointers met, if there is no cyle we will return Null and use that for an edge case. 2 we will then create a new pointer that will start at the head of the linked list and we will check whether or not the two will meet once more */
        
        
        function findIntersection(head: ListNode | null): ListNode |null{
                
            let slow =  head 
            let fast =  head 
        
            while(fast && fast.next){
                slow =  slow.next 
                fast = fast.next.next
                if( fast === slow){
                    return fast 
                }
            }
            return null
        
        }

};