function replace(){
let arr = ["Houston", "problem"];
let sent = "_, we have a _.";
let sent1 = sent.split('');
for (let i = 0;i < sent1.length;i ++){
    if(sent1[i] == "_"){
   sent1.splice(i,1,arr[i--]);
    }
}
}
