"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d;
  d = Math.pow(b, 2) - 4 * a * c;

  if (d < 0) {
    return arr;
  } else if (d === 0) {
    let x = -b / (2 * a);
    arr.push(x);
    return arr;
  } else if (d > 0) {
    let x1=(-b + Math.sqrt(d)) / (2 * a);
    let x2=(-b - Math.sqrt(d)) / (2 * a);
    arr.push(x1, x2);
    return arr;
  }
}


function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let rate = percent / 100 / 12;
  let principal = amount - contribution;
  let monthlyPayment = principal * (rate + (rate / (Math.pow(1 + rate, countMonths) - 1)));
  let totalAmount = (Math.round((monthlyPayment * countMonths) * 100)) / 100;
  return totalAmount;
}