// Calculate the price of 30 phones, the price of one phone is $119.95 and the tax rate is 5%

let PriceOfPhone = 119.95;
let TaxRate = 5/100;
let PriceOfPhonePlusTaxRate = PriceOfPhone + (PriceOfPhone * TaxRate);
let PriceOf30Phones = 30 * PriceOfPhonePlusTaxRate;
console.log(PriceOf30Phones + "$");

