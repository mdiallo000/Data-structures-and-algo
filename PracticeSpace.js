/**
 * * lets say i have this sentence "camelCase" return the number
 * * so i ask my self how do i detect whenever we come across a letter
 * * so apperantly you can detect wheter or not a char is uppercase by doing this === this.toUpperCase
 * ? So possible ideas: 1 set a counter =1; 2: loop through the whole string; 3: if a character is upppercase icrement the counter .
 * * First Method didnt work but i was 90% on the right track
 * *gghdfgdf
 * !The best case
 *
 *
 *
 *
 */
 let nums = [[1, 2, 5], [45, 7, 6], [1], [7, 8]]
const FlattenArr = (nums) =>{
    let arr = []
    for(let i =0 ; i<=nums.length; i++){
        for( let j =0; j<=nums.length, j++) {
            arr.push(nums[j])
        }


    }
return arr 
}