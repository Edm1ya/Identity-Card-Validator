const btnValidate = document.querySelector("#validate"),
  inputIdentityCard = document.querySelector("#identity-card");

let identityCard = 0;
let sumOfDigits = 0;


// Functions
const validateCardIdentity = (inputIdentityCard) => {
  identityCard = inputIdentityCard.value;
  let arrayIdentityCard = [];

  for (let index = 0; index < identityCard.length - 1; index++) {
    if (index % 2 === 1) {
      if (identityCard[index] * 2 > 9) {
        [first, secord] = (identityCard[index] * 2).toString();
        arrayIdentityCard.push(first, secord);
        continue;
      }
      arrayIdentityCard.push(identityCard[index] * 2);
    } else {
      arrayIdentityCard.push(identityCard[index]);
    }
  }

  totalSumDigits = sumOfDigit(
    arrayIdentityCard,
    identityCard[identityCard.length - 1] * 1
  );

  isValid(totalSumDigits, identityCard.length - 1);
};

const sumOfDigit = (arrayIdentityCard, lastDigit) => {
  let sumOfDigits = 0;

  arrayIdentityCard.forEach((value) => {
    sumOfDigits = sumOfDigits + (value * 1);
  });

  sumOfDigits += lastDigit;

  return sumOfDigits;
};

const isValid = (amount) => {
  let mesagge =
    amount % 10 === 0 ? "La cedula es valida" : "La Cedula es invalida";

  alert(mesagge);
};

const clearFiled = () => {
  inputIdentityCard.value = '';

};


// Listeners
btnValidate.addEventListener("click", (event) => {
  validateCardIdentity(inputIdentityCard);

  clearFiled();
});

inputIdentityCard.addEventListener("keydown", (event) => {

  if (event.key === 'Enter') {
    event.preventDefault();
    validateCardIdentity(inputIdentityCard);

    clearFiled();
  }
});

