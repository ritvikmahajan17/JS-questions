function isSameDigits(n){
    let str = n.toString()

    let firstChar=str[0];

    for(let i=1;i<str.length;i++){
        if(str[i]!=firstChar){
            return "False"
        }
    }

    return "True"


}

console.log(isSameDigits(1464896553453))

let checkSameDigits = n =>{

    let str = n.toString()

    let firstChar=str[0];

    for(let i=1;i<str.length;i++){
        if(str[i]!=firstChar){
            return "False"
        }
    }

    return "True"

}

console.log(checkSameDigits(444444444))
module.exports = {isSameDigits,checkSameDigits}
