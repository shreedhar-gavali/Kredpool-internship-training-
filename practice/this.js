function person(){
    console.log(this.name);

}

const person1 ={

    name: "tony" ,
    person: person,
    greet:function(){
 console.log(this.name);
    }

}

const person2 ={

    name: "steve",
    person:person
}

person1.person();
person2.person();
person1.greet();

person3 ={
funstore:person,
name: "bruce"
}
const newperson =person.call(person3);  //this will point to person3 object and it will print undefined because person3 has no name property



