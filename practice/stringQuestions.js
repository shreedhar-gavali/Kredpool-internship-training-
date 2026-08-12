//Reverse  a string 

// const str = "shridhar";
// let reverse=" ";

// for(let i=str.length-1;i>=0;i--){
//      reverse= str[i];
//  console.log(reverse);   
// // }
// str1=['s','h','r','i','d','h','a','r'];
// console.log(str1.reverse());

const str2='javascript is a programming lang'; //finding the  number of vowels in a string 
let count=0;
for(let i=0; i<str2.length;i++){
    if(str2[i]=='a'||
        str2[i]=='e'||
         str2[i]=='o'||
          str2[i]=='u'||
           str2[i]=='i'
        
    ){
        count++;
    }
   
}
console.log(count);