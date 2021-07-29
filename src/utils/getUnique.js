export const getUnique=(arr, index)=> {

    const unique = arr
         .map(e => e[index])
  
         .map((e, i, final) => final.indexOf(e) === i && i)
  
        .filter(e => arr[e]).map(e => arr[e]);      
  
     return unique;
  }