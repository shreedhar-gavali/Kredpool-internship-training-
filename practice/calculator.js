let c=0;
let a=1;
let b=2;
let operator="+";
    switch(operator)
    {
        case `+`:
            c=a+b;
            break;
        case `-`:
            c=a-b;
            break;

        case `/`:
            c=a/b;
            break;
        
        case `*`:
            c=a*b;
            break;

        case "%":
              c=a%b;
              break;

        default:
            console.log("invalide");
          
    }
console.log(c);

