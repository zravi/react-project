console.log("hello");
var arr=[5,0,6,2,6,8,2,6,8,3,2,0,8,9];
console.log(arr);
for(let i=0;i=arr.length;i++){
    for(let j=i+1;j=arr.length;j++){
        if(arr[j]!=arr[i]){
            console.log(arr[j]);
        }
    }
}