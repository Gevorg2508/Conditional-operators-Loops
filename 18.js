let arr = [0,1,5,8,12,23];
let newArr = [];
function number(num){
    for (let i = 0; i <=num; i++){
            if(arr.includes(i)){
                newArr.push(i);
            }else{
                newArr.push("undefined");
            }
    }
    return newArr;
}
console.log(number(24));