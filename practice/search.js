const arr1=["car" ,"bike" , "truck" ,"train", "bike"];
let arr2=arr1.indexOf("car")+1;
console.log(arr2);

let arr3=arr1.lastIndexOf("bike")+1;
console.log(arr3);

console.log(arr1.includes("truck"));

let arr4=arr1.find((value, index, arr1)=>
 value=="truck");
console.log(arr4);