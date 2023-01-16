let array = ['we', 'love', 'code', 'academy'];

function maxString(arr){

  let maxIdx=0;
  let maxLen=0;
  for(let i=0;i<arr.length;i++){
    if(arr[i].length>maxLen){
      maxLen=arr[i].length;
      maxIdx=i;
    }
  }

  return arr[maxIdx];

}

console.log(maxString(array));

let longestString = (arr) => {

  let maxIdx=0;
  let maxLen=0;
  for(let i=0;i<arr.length;i++){
    if(arr[i].length>maxLen){
      maxLen=arr[i].length;
      maxIdx=i;
    }
  }

  return arr[maxIdx];

};

console.log(longestString(array));
