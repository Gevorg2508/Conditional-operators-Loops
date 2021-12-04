for (let j = 1; j <= 1;j ++){
    console.log(j);
}

let index2 = 3;
let arr2 = [];
for (let k = 6; k >= 2; k -= index2){
arr2.push(k);
index2 ++;
}
console.log(arr2.reverse().join(' '));

let arr3 = [];
let index3 = 2;
for (let c = 10; c >= 3 ;c -= index3){
    arr3.push(c);
    index3 ++;
}
console.log(arr3.reverse().join(' '));

let index4 = 1;
let arr4 = [];
for (let d = 13; d >= 4 ; d -= index4){
    arr4.push(d);
    index4 ++;
}
console.log(arr4.reverse().join(' '));

let arr5 = [];
let index5 = 0;
for (let i = 15; i >= 5; i -= index5 ){
arr5.push(i);
index5 ++;
}
console.log(arr5.reverse().join(' '));