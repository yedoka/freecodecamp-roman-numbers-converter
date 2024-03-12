const number = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

convertBtn.addEventListener("click", (event) => {
  event.preventDefault();
  if (number.value === "") {
    output.innerHTML = "Please enter a valid number";
  } else if (number.value < 1) {
    output.innerHTML = "Please enter a number greater than or equal to 1";
  } else if (number.value > 3999) {
    output.innerHTML = "Please enter a number less than or equal to 3999";
  } else {
    output.innerHTML = `${convertToRoman(number.value)}`;
  }
});

function convertToRoman(num) {
  const romanNumerals = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  let roman = "";
  for (let key in romanNumerals) {
    while (num >= romanNumerals[key]) {
      roman += key;
      num -= romanNumerals[key];
    }
  }
  return roman;
}
