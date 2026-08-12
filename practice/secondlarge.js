const arr = [10, 5, 20, 8, 20, 15];

for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr.length-1-i;j++){

    if(arr[j]<arr[j+1]){
   let  temp=arr[j];
    arr[j]= arr[j+1];
    arr[j+1]=temp;
    }

    }
}
// console.log(arr);

const largest = arr[0];
let secondlarge=[];
for(let i=1;i<=arr.length;i++){
    if(largest==arr[i]){
        continue;
    }
    
       secondlarge=arr[i];
       break;
    
}
console.log(secondlarge);
