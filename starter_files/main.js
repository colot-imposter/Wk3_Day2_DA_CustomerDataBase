//
// console.log(customers);
// console.log(cust[0]);
// console.log(firstName);
// console.log(fullName);
// console.log(email);
// console.log(StreetAddress);
// console.log(CityStateZipAddress);
// console.log(PhonyNumb);

// const cust = customers.results;
// const firstName = cust[0].name.first;
// const lastName = cust[0].name.last;
// const fullName = `${firstName} ${lastName}`;
// const email = cust[0].email
// const StreetAddress = cust[0].location.street
// const CityStateZipAddress =`${cust[0].location.city}, ${cust[0].location.state} ${cust[0].location.postcode} `;
// const PhonyNumb = cust[0].phone;









const cust = customers.results;
// console.log('!!!! ' + cust.length);
for (var i = 0; i < cust.length; i++) {

  // console.log('in for loop ' + i);

    const pictureURL = cust[i].picture.large;
    const firstName = cust[i].name.first;
    const lastName = cust[i].name.last;
    const fullName = `${firstName} ${lastName}`;
    const email = cust[i].email
    const StreetAddress = cust[i].location.street
    const CityStateZipAddress = `${cust[i].location.city}, ${cust[i].location.state} ${cust[i].location.postcode} `;
    const PhonyNumb = cust[i].phone;
    let PersonINFO = `
 <img src='${pictureURL}'>
 <h2>${fullName}</h2>
 <p>${email}</p>
 <p>${StreetAddress}</p>
 <p>${CityStateZipAddress}</p>
 <p>${PhonyNumb}<p/>
 <p>"#######"</p>
 </div>
 `
    let rowNumber = 0
    if (i <= 3) {
        rowNumber = 1
    } else if (i > 3 && i <= 7) {
        rowNumber = 2
    } else if (i > 7) {
        rowNumber = 3
    }

    let id = "row" + rowNumber;


let ourRow = document.getElementById(id);

let INDIVPerson = document.createElement('div');
INDIVPerson.className = 'PersonINFO';

  ourRow.appendChild(INDIVPerson);

    // console.log("id is " + id);
  INDIVPerson.innerHTML = PersonINFO;
}



//l

//I need to get this to repeat three times, each time in a new 'section'
