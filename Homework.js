"use strict"
// 
// let a = [1,2,3,4,5];
// for (let i=0; i< a.length;i++){
//     console.log("for",i,a[i]);
// }
// let i = 0;
// while(i<a.length){
// console.log("for",i,a[i]);
// i++
// };
// 1.
// let i = 0;
// do {
//     console.log("for",i,a[i]);
//     i++;
// } while (i<a.length);

// let question = prompt("enter a question",0);
//     if(question % 2 === 0){
//         console.log("even");
//     }else if(question % 2 !== 0){
//         console.log("odd");
//     }else{
//         console.log("type the rigth question!");
//     }
// 
// function triangle(a,b){
// return (180-a-b);
// }
// console.log(triangle(120,10));

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
    
//
// function multiple(num){
// if(num % 3 === 0 && num % 5 ===0 && num % 7 ===0){
//     console.log(num+" is a multiple of a 3,5 and 7")
// }else if( num % 3 ===0){
//     console.log(num+" is multiple of 3");
// }else if( num % 5 ===0 && num % 7 ===0){
//     console.log(num+" is multiple of 5 and 7");
// }else if(num % 3 === 0 && num % 7 ===0){
//     console.log(num+" is multiple of 3 anf 7")
// }else if(num % 3 ===0 || num % 5 ===0 || num % 7 ===0){
//     console.log(num+" is multiple of 3,5 or 7")
// }
// return ;
// }
// multiple(35);

// 
// function sortByMax(a,b,c){
//     let arr = [];
// arr.push(a,b,c);
// return arr.sort((c,d)=>{return c-d})
// }
// console.log(sortByMax(12,-1,-14));

// 
// let func = function(x,y,z){
    
//     if (x>0 && y>0 && z>0)
//     {
//            alert("The sign is +");
//     }
//     else if (x<0 && y<0 && z<0)
//             {
//               console.log("The sign is -");
//             }
//             else if (x>0 && y<0 && z<0)
//             {
//               console.log("The sign is +");
//             }
//             else if (x<0 && y>0 && z<0)
//             {
//               console.log("The sign is +");
//             }
//             else if(x === 0 || y === 0 || z === 0)
//             {
//               console.log("The sign is unsigned");
//             }
    
// } 

// 
// func(-1,10,-1);


// function includes(digit,num){
//     let str1 = digit.toString();
//     let str2 = num.toString();
//   if (str2.includes(str1)){
//       console.log("Yes!");
//   }else {
//       console.log(" No!")
//   }
//   return ;
// }

// includes(5,0);


// function reverse(num){
    
//     if(num.toString().length == 1){
//         console.log(num);
//     }else {
// let char = num.toString().split('');
// let char1 = char.shift();
// let char2 = char.pop();
// char.push(char1);
// char.unshift(char2);
// console.log(char.join(''));
//     }
//     return;
// }
// reverse(0);


// function isPrime(num){
    
// for(let i = 2; i< num; i++){
//     if(num % i ===0){
//         console.log("no!");
//     }else{
//         console.log("Yes!")
//     }
//     break;
// }
// return;
// }
// isPrime(13);


// function fib(n){
//  if(n === 0){
//      return 0;
//  }else if(n === 1){
//      return 1;
//  }else{
//      return fib(n-2)+fib(n-1);
//  }

// }

// console.log(fib(10));

// function calc(num1,num2){
//      if(num2 === 0){
//         console.log("cannot calculate !");
//      }else if(num2 % num1 ===0){
//         console.log("quitient is "+(num2/num1)+"!");
//     }
//     else if(num2 % num1 !==0){
//         console.log("remainder is "+(num2 % num1))
//     }
//     return ;
// }
// calc(5,10);


// function replace(){
// let arr = ["Houston", "problem"];
// let sent = "_, we have a _.";
// let sent1 = sent.split('');
// for (let i = 0;i < sent1.length;i ++){
//     if(sent1[i] == "_"){
//    sent1.splice(i,1,arr[i--]);
  

// }
// }
// return sent1.join('');

// }
// console.log(replace());     -- teri

// let arr = [8, 0, 1, "hey", 12, 5 , true, "2", null, 7, 3];
// let newArr = [];
// let result = [];
// for (let i = 0 ; i<arr.length;i ++){
//     if(typeof(arr[i]) === 'number'){
//     newArr.push(arr[i]);
//     }
// }
// for ( let j = 0; j<newArr.length; j++){
//     if(newArr[j] % 2 !== 0){
//         result.push(newArr[j]);
//     }
// }
// let answer = [];
// // console.log(result);
// for (let k = 0; k <newArr.length; k++){
//     if(newArr[k] % 2 === 0){
//         answer.push(newArr[k]);
//     }
// }
// // console.log(answer);
// let lastArray = result.concat(answer);
// console.log(lastArray)


// let arr = [1, '10', 'hi', 2, 3];
//  let nums = [];
//  let strs = [];

// for(let i = 0; i <arr.length; i++){
//     if(typeof(arr[i]) === 'number'){
//         nums.push(arr[i]);
//     }
// }
// for(let j = 0; j<arr.length ; j++){
//     if(typeof(arr[j]) === 'string'){
//         strs.push(arr[j]);
//     }
// }
//     console.log('nums: '+nums.length);
//     console.log('strs: '+strs.length)



// let arr = ['anymore', 'raven', 'me', 'communicate', 'unexpected', 'heart'];
// let arr1 = [];
// let arr2 = [];
// for(let i = 0; i <arr.length; i++){
//     arr1.push(arr[i].length);
// }

// console.log(Math.max(...arr1)+Math.min(...arr1));




