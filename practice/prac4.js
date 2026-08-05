const username="admin";
const password= "123";
function login(username, password){

return promise =new Promise((resolve, reject) => {
    setTimeout(()=>
    {
        if(username=="admin" && password=="123"){
            resolve("Login Successful");
        }
        else{
            reject("invalid Credentials");
        }
    },2000);
})
}

async function checkLogin() {
    try{
        const data = await login("admin" , "1923");
        console.log(data);
    }
    catch(error){
        console.log(error);
    }

}

checkLogin();
