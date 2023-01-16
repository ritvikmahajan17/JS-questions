
let array = [1, 2, 3, 4, 5];
function maxEven(params){
  let mx= Number.MIN_VALUE;
    
  for(let i=0;i<params.length;i++){
    if(params[i]%2===0){
      mx=Math.max(params[i],mx);
    }
  }
  return mx;
}

console.log(maxEven(array));

let maximumEven = (params) =>{

  let mx= Number.MIN_VALUE;
    
  for(let i=0;i<params.length;i++){
    if(params[i]%2===0){
      mx=Math.max(params[i],mx);
    }
  }
  return mx;

};

console.log(maximumEven(array));
module.exports={maxEven,maximumEven};
