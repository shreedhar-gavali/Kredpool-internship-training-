 const vehicle = new Set();
 vehicle.add("car");
 vehicle.add("truck");
 vehicle.add("bike");

//  console.log( ...vehicle);

// vehicle.delete("bike");

// console.log(vehicle);

vehicle.add("bike1");
vehicle.add("bike2");

// vehicle.forEach(element => { console.log(element);
    
// });

// for(values of vehicle ){
//     console.log(values);
// }

const v=vehicle.entries();

for(const val of v){
    console.log(val);
   
}

const v1=vehicle.values();

for(const val of v1){
    console.log(val);
}

console.log(vehicle.clear());
