const numbers = [4, 9, 16, 25, 29];  
// findIndex() method for searching of array element 
let first = numbers.findIndex(myFunction);

function myFunction(value, index, array) {
    switch(16)
    {
        case 4:
            console.log("not present");
            break;
        case 9:
            console.log("not present");
            break;
        case 16:
            console.log("present");
            return true;
        case 25:
            console.log("not present");
            break;
        case 29:
            console.log("not present");
            break;
        default:
        console.log("value is not available");
    }
}