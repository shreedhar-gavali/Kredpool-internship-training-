// const arr = [1,2,3,4,5,6];
// const arr2=[];
// for(let i of arr ){
    
//     arr2.unshift(i);
// }

// console.log(...arr2);

// const arr3=arr.map((value,index)=>{
    
//     return value*2;
// })
// console.log(arr3);

// const arr4=arr.filter((value)=>value>3);
// console.log(arr4);

// let name="abcd";
// let n=[...name];
// console.log(n);
// let a=[];
// for(i of n){
//     a.unshift(i);
// }
// a.toString();
// console.log(a);

let arr = ["A", "B", "C", "D", "E", "F"];

[arr[0], arr[1], arr[2], arr[3]] =
[arr[2], arr[3], arr[0], arr[1]];

console.log(arr);
