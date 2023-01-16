let vowels = ['a','e','i','o','u']
let testString = "codeacademy"
function countVowels(str){

    let cnt=0;

    for(let i=0;i<str.length;i++){
        let currChar=str[i]
        for(let j=0;j<5;j++){
            if(currChar===vowels[j]){
                cnt++;
            }
        }
        
    }
    

    return cnt;

}

console.log(countVowels(testString))

let calcVowels = str => {

    let cnt=0;

    for(let i=0;i<str.length;i++){
        let currChar=str[i]
        for(let j=0;j<5;j++){
            if(currChar===vowels[j]){
                cnt++;
            }
        }
        
    }
    

    return cnt;

}

console.log(calcVowels(testString))
