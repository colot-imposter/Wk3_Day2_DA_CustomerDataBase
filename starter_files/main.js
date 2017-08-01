
console.log(customers);
const cust = customers.results;
console.log(cust[0]);
const firstName = cust[0].name.first;
console.log(firstName);
const lastName = cust[0].name.last;

const fullName = `${firstName} ${lastName}`;
console.log(fullName);

const email = cust[0].email
console.log(email);

const StreetAddress = cust[0].location.street
const CityStateZipAddress =`${cust[0].location.city}, ${cust[0].location.state} ${cust[0].location.postcode} `;
console.log(StreetAddress);
console.log(CityStateZipAddress);

const PhonyNumb = cust[0].phone;
console.log(PhonyNumb);
