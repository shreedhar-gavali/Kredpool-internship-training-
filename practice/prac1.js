function promise1(){
    return new Promise((resolve, reject)=>{
    const abc=()=>{console.log("helloshree")};
        
         const time = setTimeout(abc,3000);
         resolve(time);
        const error=()=>{
    console.log("its an error" );
 };
    reject(error);

})}
console.log("i m in middle of the code");


async function sayHello(){
    try{
        const a = await promise1();
        console.log(a);
    }
    catch(error){
        console.log(error);
    }
}

sayHello();