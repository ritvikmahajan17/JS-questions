let array = ["code", "academy"]

function concatStrings(s1,s2){
    let str1 = s1.slice(1,s1.length);
    let str2 = s2.slice(1,s2.length);


    return str1+str2;
}

console.log(concatStrings(...array))

let concatStr = (s1,s2) => {

    let str1 = s1.slice(1,s1.length);
    let str2 = s2.slice(1,s2.length);

    return str1+str2;

}

console.log(concatStr(...array))