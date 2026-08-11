function hello() {
    console.log("Hello");
}

function test(fn) {
    fn();
}

test(hello);