let mainArr = [21, -9, 15, 2116, -71, 33]; //-71
let mins = []; 
let anotherArr = [];
function closestNumber(num, arr){
    for(let i = 0; i<mainArr.length; i++){
        if(arr[i] === num){
            console.log(i)
        }else if( arr[i] !== num){
            mins.push(num - arr[i]);
        }
    }
}

function findIndex(...arr){
// let min = Math.min(...arr);
for(let i = 0; i<arr.length; i++){
        if(arr[i] < 0){
            anotherArr.push(arr[i] * -1);
        }else if(arr[i] === 0 || arr[i] > 0){
            anotherArr.push(arr[i]);
        }
    }
    return arr;
}

function lastStep(...arr){
    for(let i = 0; i<arr.length; i++){
    if(arr[i] === Math.min(...arr)){
        console.log(i);
        

    }
}
return ;
}


closestNumber(25,mainArr);  // verjnakan inputi tex@
findIndex(...mins);
lastStep(...anotherArr);







