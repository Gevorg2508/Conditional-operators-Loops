let arr = [8, 0, 1, "hey", 12, 5 , true, "2", null, 7, 3];
let newArr = [];
let result = [];
for (let i = 0 ; i<arr.length;i ++){
    if(typeof(arr[i]) === 'number'){
    newArr.push(arr[i]);
    }
}
for ( let j = 0; j<newArr.length; j++){
    if(newArr[j] % 2 !== 0){
        result.push(newArr[j]);
    }
}
let answer = [];
// console.log(result);
for (let k = 0; k <newArr.length; k++){
    if(newArr[k] % 2 === 0){
        answer.push(newArr[k]);
    }
}
// console.log(answer);
let lastArray = result.concat(answer);
console.log(lastArray)




