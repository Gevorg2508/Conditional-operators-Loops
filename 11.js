 let product = 1;
 let sum = 0;
function func1(num){
   
let str1 = num.toString();
let arr1 = str1.split('');
if(num === 0){
    return 0;
}else {
for(let i = 0; i<arr1.length; i++){
    
   product *= arr1[i];
}
}
return product ; 
}


function func2(num){
    let str1 = num.toString();
    let arr1 = str1.split('');
    if(num === 0 ){
        return 0;
    }else {
    for(let i = 0; i<arr1.length; i++){
        
       sum += Number(arr1[i]);
    }
}
return sum;
}


function result(product, sum){
if (product % sum ===0){
    console.log('Quotient is '+product/sum);
}else if(product === 0 || sum ===0){
    console.log("cannot calculate");
}else if(product % sum !==0){
console.log("Remainder is "+(product % sum))
}else if(sum === 1)
{
console.log(product);
}

return ;
}
func1(0);
func2(0);
result(product, sum);