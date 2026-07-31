const loans = [
  { id: 1, customer: "Rahul", status: "Pending" },
  { id: 2, customer: "Amit", status: "Approved" },
  { id: 3, customer: "Priya", status: "Pending" },
  {id: 4, customer:"shree", status:"Approved"}
];

const approvedamount=[
    {amount : 5000},
     { amount: 100000 },
    { amount: 50000 },
    { amount: 250000 }
]

const obj = Object.assign({}, loans,approvedamount);

console.log(obj.amount);

