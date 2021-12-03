let str = '_, we have a _.' ;
let arr = ['Houston', 'problem'];
let index = 0;
let arr2 = [];

function esc(str){
    let arr1 = str.split('');
for (let i = 0; i <arr1.length; i++){
        if(arr1[i] === '_'){
            arr2.push(arr[index]);
            index ++;
        }else {
            arr2.push(arr1[i]);
        }
    }
return arr2.join('');
}
console.log(esc(str));