// let student = {
//     name: "Rahul",
//     age: 21,
//     city: "Pune"
// };

// for (let i in student) {

//     console.log( i,student[i]);

// }

// console.log(Object.values(student));
// console.log(Object.keys(student));

// console.log(Object.entries(student));

// const arr=Object.entries(student);
// console.log(...arr);

// const arr1=[
//     {name:"krishna",age:21,city:"Pune"},
//     {name:"rahul",age:22,city:"Mumbai"},
// ]                       

const obj={
    name:"krishna",
    age:21,
    city:"Pune"
};
// console.log(obj.length);

// const {name,age,city}=arr1[0];
// console.log(name);



for (let key in obj) {
    console.log(key, obj[key]);
}