const arr = [1,2,3,4,5,6];

const arr2=arr.map((value,index)=>{ 
    if(index===3){
       return value*2;
    }
    return value});

console.log(arr2);

const arr3=arr[2]*2;

console.log(arr3);

const arr5=arr.reverse();
console.log(arr5);

