function replaceChar(str){

  let finalStr='';

  for(let i=0;i<str.length;i++){
    let req = str.charCodeAt(i)+1;
        
    if(req==123) req=97;
    if(req==91) req = 65;
    finalStr+= String.fromCharCode(req);
  }

  return finalStr;

}

console.log(replaceChar('lazyinterns'));

let upChar = str => {

  let finalStr='';

  for(let i=0;i<str.length;i++){
    let req = str.charCodeAt(i)+1;
        
    if(req==123) req=97;
    if(req==91) req = 65;
    finalStr+= String.fromCharCode(req);
  }

  return finalStr;

};

console.log(upChar('codeacademy'));
