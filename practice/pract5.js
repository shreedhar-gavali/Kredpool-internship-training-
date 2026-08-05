async function getUsers() {
    try{
    const response = await fetch('https://jsonplaceholder.typicode.com/users/')

        const data = await response.json();
console.log(Array.isArray(data));
        data.forEach(n => {
            n.name;
        console.log(n.name);
            
        });
   
    }
    catch(error){
        console.log(error);
    }
}

getUsers();