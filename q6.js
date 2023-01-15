function endScript(str){
    return str.endsWith("Script")
}

let checkEnd = str => str.endsWith("Script")

console.log(endScript("JavaScript"))
console.log(checkEnd("Javascript"))