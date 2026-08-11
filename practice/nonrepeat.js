



const arr = [1, 2, 3, 2, 4, 1, 5, 3];
let donotrepeat=[];
    for(let i=0;i<arr.length;i++){
        alreadyexist=false;
        
        for(let j=0;j<donotrepeat.length;j++){

            if(arr[i]==donotrepeat[j]){
                    alreadyexist=true;
                    break;

            }
        }
        if(!alreadyexist){
            donotrepeat.push(arr[i]);
        }
    }
    console.log(donotrepeat);

    // const set= new Set(arr);
    // console.log([...set]);