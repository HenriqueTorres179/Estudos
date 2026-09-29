/*
'use strict';
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
*/

'use strict';

function saudar(name) {
  let mensagem = `Olá ${name}! Seja bem vindo(a)`;
  return mensagem;
}
console.log(saudar('Maria'));

function dobrar(number) {
  let dobro = number * 2;
  return dobro;
}
console.log(dobrar(5));

function calcularMedia(nota1, nota2, nota3) {
  let media = (nota1 + nota2 + nota3) / 3;
  return media;
}
console.log(calcularMedia(7, 8, 9));

function ehPar(number) {
  let parOuImpar = number % 2 === 0;
  return parOuImpar;
}
console.log(ehPar(4));
console.log(ehPar(7));

function idadeEmDias(anos) {
  let dias = anos * 365;
  return dias;
}
console.log(idadeEmDias(20));
