async function postdata(){
    const user={
        name:"shreedhar",
         age: 25,
        city: "Sangli",
        email:"shreedhargavali2@gmail.com"   
    }

    const response=  await fetch("https://jsonplaceholder.typicode.com/posts",{
      method:"POST",
      
      headers:{"Content-Type":"application/json"},

      body:JSON.stringify(user)});

    const data =await response.json();
    console.log(response.status);
    console.log(data);
 return data;
}
postdata();
    