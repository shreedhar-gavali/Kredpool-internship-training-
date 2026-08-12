
function getMessage(){

return new Promise((resolve) => {
    const set  = setTimeout(()=>{
        console.log("Learning async/await");
    },3000);
   
})
}


async function displayMessage() {

    const data = await getMessage();

    console.log(data);
}
displayMessage();

 