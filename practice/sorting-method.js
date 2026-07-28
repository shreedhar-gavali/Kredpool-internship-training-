const months = ["Jan", "Feb", "Mar", "Apr"];
// sort() changes the original array
const arr1= months.sort();
console.log(arr1);
console.log(months);


//toSorted() does not alters  the original array and creates a new array 
const months2 = ["Jan", "Feb", "Mar", "Apr", 2];
const arr2=months2.toSorted();
console.log(months2);
console.log(arr2);


const points = ["40", "100", "1", "5", "25", "10"];
console.log(points.toSorted((a,b) =>  a-b ));//ascending when numbers are string . compare logic is used.

console.log(points.toSorted((a,b) =>  b-a ));//descending 

console.log(points.reverse());
console.log(points);
console.log(points.toReversed()); //does not change the  original array
