
let text;
async function getdata() {
 const response = await fetch("./data.json");
      const data = await response.json();
      console.log(data);    
        text+=JSON.stringify(data);
        document.getElementById("demo").innerHTML=text;

       let text2;

}
getdata();






