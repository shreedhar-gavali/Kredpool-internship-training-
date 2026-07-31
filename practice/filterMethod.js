
//Loan Application List
const loans = [
  { id: 1, customer: "Rahul", status: "Pending" },
  { id: 2, customer: "Amit", status: "Approved" },
  { id: 3, customer: "Priya", status: "Pending" }
];

const loanpendig = loans.filter(loan=> loan.status==="Pending");
   
console.log(loanpendig);

//filter customer name=amit

const customeris = loans.filter(customers=>customers.customer.toLowerCase().includes("amit"));

console.log(customeris);



