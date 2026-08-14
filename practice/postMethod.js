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
// postdata();

async function updatedata(id)
{
   const user={
    
    email:"shree2@gmail.com"
   }


  const  response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{method:"PATCH",
    headers:{"Content-Type":"application/json"},
    body: JSON.stringify(user)
   
  })
  console.log("status", response.status);
  const  redata= await response.json();

  console.log("updated data",redata);
  return redata;

}    
// updatedata();

const main = async()=>
{
 const createdData = await postdata();
 const updatedData = await updatedata(createdData.id);
}
main();