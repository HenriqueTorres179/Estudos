"use strict";

// Function solta

function calculateDiscount(price, discount) {
  const valueDiscount = (discount / 100) * price;
  const valuePrice = price - valueDiscount;
  return valuePrice;
}
const priceFinal = calculateDiscount(100, 15);
console.log(`O preço final será de: 
    R$${priceFinal.toFixed(2).replaceAll(".", ",")}!`);

// Function com Objeto

const produto = {
  nameProduct: "Camiseta",
  price: 100,
  calculateDiscount2(discount) {
    const valueDiscount2 = (discount / 100) * this.price;
    const priceWithDiscount2 = this.price - valueDiscount2;
    return priceWithDiscount2;
  },
};
const priceFinal2 = produto.calculateDiscount2(15);
console.log(`O preço final será de: 
    R$${priceFinal2.toFixed(2).replaceAll(".", ",")}!`);
