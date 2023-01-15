let s = "MeRRy hAD a LITTle lAMp"

function invertCapitalisation(str){

    let finalStr="";
     
    for(let i=0;i<str.length;i++){
        if(str[i]===str[i].toLowerCase()){
            finalStr+= str[i].toUpperCase()
        }
        else{
            finalStr+= str[i].toLowerCase()
        }
    }


    return finalStr;

}


 console.log(invertCapitalisation(s))

 let invertString = (str) => {

    let finalStr="";
     
    for(let i=0;i<str.length;i++){
        if(str[i]===str[i].toLowerCase()){
            finalStr+= str[i].toUpperCase()
        }
        else{
            finalStr+= str[i].toLowerCase()
        }
    }


    return finalStr;

 }

 console.log(invertString(s))