
const promise1= new Promise((resolve, reject)=>{
    const abc=()=>{console.log("helloshree")};
        
 const time = setTimeout(abc,3000);
    resolve(time);
const error=()=>{
    console.log("its an error" );
 };
    reject(error);

})
console.log("i m in middle of the code");


// async function sayHelo(){
//     const a = await  console.log("HELLO SHREE");
//     console.log(a);
// }

// sayHello();