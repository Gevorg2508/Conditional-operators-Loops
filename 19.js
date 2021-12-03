let arr = [[3, 4, 5], [1, 0, 0], [4, 5, 4], [8, 8, -1]];
let result = [];

for (let i = 0; i< arr.length; i++){
if (Array.isArray(arr[i])){
    result.push(arr[i].reduce((curr,akk)=>curr+akk));
}
}
console.log(result);