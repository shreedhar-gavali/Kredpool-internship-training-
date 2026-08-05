const promise = new Promise((resolve) => {

    setTimeout(() => {
        resolve("Hello World");
    }, 2000);

});

promise.then((result) => {
    console.log(result);
});

