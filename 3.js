function lastDig(num){
    let str1 = num.toString();
let arr1 = str1.split('');
if(arr1[arr1.length - 1] === 0){
    console.log(num);
}else if(arr1[arr1.length - 1] != 0) {
    let str2 = arr1.pop();
    arr1.unshift(str2);
}
return arr1.join('');
}
console.log(lastDig(123));