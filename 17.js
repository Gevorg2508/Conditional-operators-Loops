let str = 'May the Force be with you.';
let arr1 = str.split('');

let result = [];

if(arr1[arr1.length -1] === "."  || arr1[arr1.length - 1] === "!"){
    result = arr1.slice(0,arr1.length - 1).join('').split(' ', );
}
    
console.log(result);

