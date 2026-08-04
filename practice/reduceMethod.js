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

const merge = loans.map((loan,index)=>({
  ...loan ,
  ...approvedamount[index]
}))

console.log(merge);

console.log(merge.filter((amounts)=>amounts.amount>10000));

const totalamount=merge.reduce((accumaltor,total)=>accumaltor=total.amount,0
);

console.log(` Total Amount is ${totalamount}`);

