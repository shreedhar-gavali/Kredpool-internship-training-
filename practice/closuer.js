function outer(){

    const a= 2;
   function inner(){
   
    console.log(a);

    }
return inner();
  
}
outer();
// function greet() {
//     console.log(this);
// }

// greet();

