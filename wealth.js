"use strict";
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function compoundInterest(currentWealth, rateOfReturn, monthlyDeposit, years) {
  let totalSavings = currentWealth;
  for (let year = 1; year <= years; year++) {
    let interest = totalSavings * (rateOfReturn / 100);
    totalSavings += interest + monthlyDeposit * 12;
    console.log(`Year ${year}: Total wealth = ${totalSavings.toFixed(2)}`);
  }

  rl.close();
}

function main() {
  //try {
  rl.question("Enter your current wealth: ", (currentWealth) => {
    rl.question("Enter estimated rate of return (%): ", (rateOfReturn) => {
      rl.question(
        "Enter how much you can save per month: ",
        (monthlyDeposit) => {
          rl.question("Enter investment period in years: ", (years) => {
            currentWealth = parseFloat(currentWealth);
            rateOfReturn = parseFloat(rateOfReturn);
            monthlyDeposit = parseFloat(monthlyDeposit);
            years = parseInt(years);

            if (
              isNaN(currentWealth) ||
              isNaN(rateOfReturn) ||
              isNaN(monthlyDeposit) ||
              isNaN(years)
            ) {
              console.log("Invalid input. You must only enter numbers.");
              rl.close();
              return;
            }

            compoundInterest(
              currentWealth,
              rateOfReturn,
              monthlyDeposit,
              years
            );
          });
        }
      );
    });
  });
}
//catch (error) {
//console.log("Invalid input. You must only enter numbers.");
//}
//}

main();
