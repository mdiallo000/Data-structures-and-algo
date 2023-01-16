function findDuplicate(nums: number[]): number {
//  we are meant to return whathever the duplicate value is withing the linked_list 
//  An obvious way of solving this is to use a set and add all the nodes that we see inside the set and when we encounter the duplicate value we can then return it. This will the starting point and we can potentially improve on it eventually 
        let net=  new Set()
        
        for(let curr = 0; curr < nums.length; curr++){
            if(net.has(nums[curr])){
                return nums[curr]
            }
            net.add(nums[curr])
        }



};