// <----------------- Methods use in strings ----------------->
const passenger = "HaMzA";
const passengerLower = passenger.toLocaleLowerCase();
console.log(passengerLower);
const passengerCorrect =
  passengerLower[0].toLocaleUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

//Correct Email Address

const email = "hamza.khan951hk@gmail.com";
const loginEmail = "Hamza.khanHK951@gmail.com";

const normalizeEmail = loginEmail.toLocaleLowerCase().trim();
console.log(normalizeEmail);

//replace method

const priceGB = "254,66rupees";
const priceDollar = priceGB.replace("rupees", "$");
console.log(priceDollar);

const annoucement =
  "All passenger come to the bording door 23. Boarding door 23! ";
console.log(annoucement.replaceAll("door", "gate"));

//practice

const checkBaggage = function (items) {
  const baggage = items.toLocaleLowerCase();
  if (baggage.includes("knife" || baggage.includes("gun"))) {
    console.log("Yoy are not allowed on 😧");
  } else {
    console.log("Welcome to board 🎉");
  }
};
checkBaggage("I have a laptop, some food and a pocket Knife");
checkBaggage("Socks and camera");
checkBaggage("Fot some snacks and a gun for protection");
