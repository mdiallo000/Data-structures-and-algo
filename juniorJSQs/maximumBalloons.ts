function maximumBalloons(text: String){
    let count =  {}
    for(let i = 0; i < text.length; ++i){
        let char =  text[i]
        if( count.hasOwnProperty(char)){
            count[char]++
        }
        else{
            count[char] = 0 
        }
    }
    let wrd: String = "balloon"
    for(let i =0; i < wrd.length; i++){
        
    }
}