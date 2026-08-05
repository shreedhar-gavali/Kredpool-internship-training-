// let button = document.getElementById('btnLoad');

// button.addEventListener('click', loadStudents);

     async function loadStudents(){
        console.log('Button clicked');

        const response =  await fetch('https://jsonplaceholder.typicode.com/users/1');
           
        const getdata=   response.json();

        console.log(getdata);

            // document.getElementById('name').textContent=getdata.name;
            // document.getElementById('email').textContent=getdata.email;
    }
    loadStudents();

