'use strict';
// Function solta

function calculateDiscount(price, discount) {
  const valueDiscount = (discount / 100) * price;
  const valuePrice = price - valueDiscount;
  return valuePrice;
}
const priceFinal = calculateDiscount(100, 15);
console.log(`O preço final será de: 
    R$${priceFinal.toFixed(2).replaceAll('.', ',')}!`);

// Function com Objeto

const produto = {
  nameProduct: 'Camiseta',
  price: 100,
  calculateDiscount2(discount) {
    const valueDiscount2 = (discount / 100) * this.price;
    const priceWithDiscount2 = this.price - valueDiscount2;
    return priceWithDiscount2;
  },
};
const priceFinal2 = produto.calculateDiscount2(15);
console.log(`O preço final será de: 
    R$${priceFinal2.toFixed(2).replaceAll('.', ',')}!`);

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

function somar(a, b) {
  return `O resultado da soma foi de: ${a + b}`;
}

function subtrair(a, b) {
  return `O resultado da subtração foi de: ${a - b}`;
}

function multiplicar(a, b) {
  return `O resultado da multiplicação foi de: ${a * b}`;
}

function dividir(a, b) {
  let resto = a % b;
  let resultado = a / b;
  return `O resultado da divisão é de: ${resultado.toFixed(3).replaceAll('.', ',')}. \nE o resto dela foi de: ${resto.toFixed(3).replaceAll('.', ',')}`;
}

function calcular(a, b, operacao) {
  if (operacao === 'somar') {
    return somar(a, b);
  } else if (operacao === 'subtrair') {
    return subtrair(a, b);
  } else if (operacao === 'multiplicar') {
    return multiplicar(a, b);
  } else if (operacao === 'dividir') {
    return dividir(a, b);
  } else {
    return 'Operação inválida!';
  }
}

let operacao = prompt(
  'Digite a operação desejada (somar, subtrair, multiplicar ou dividir):',
)
  .toLowerCase()
  .trim();

let num1 = +prompt('Digite o primeiro número desejado:');
let num2 = +prompt('Digite o segundo número desejado:');

let resultadoFinal = calcular(num1, num2, operacao);
console.log(resultadoFinal);
alert(resultadoFinal);

const notasDaTurma = [7.5, 8.0, 5.0, 9.2, 6.0];

function analisarNotas(notas) {
  let somaNotasTotal = 0;
  let maiorNum = -Infinity;
  let menorNum = Infinity;

  for (let i = 0; i < notas.length; i++) {
    let notaAtual = notas[i];

    if (notaAtual > maiorNum) {
      maiorNum = notaAtual;
    } else if (notaAtual < menorNum) {
      menorNum = notaAtual;
    }

    somaNotasTotal += notaAtual;
  }

  let media = somaNotasTotal / notas.length;

  console.log(`A média total da turma foi de: ${media.toFixed(2).replaceAll('.', ',')}.
Já a maior nota foi de: ${maiorNum.toFixed(2).replaceAll('.', ',')}.
E a menor nota foi de: ${menorNum.toFixed(2).replaceAll('.', ',')}`);
}

analisarNotas(notasDaTurma);

function analisarNotas2(notas) {
  let somaNotasTotal = 0;
  let maiorNum = -Infinity;
  let menorNum = Infinity;

  // O for...of pega cada elemento do array diretamente e joga na variável 'nota'
  for (let nota of notas) {
    if (nota > maiorNum) {
      maiorNum = nota;
    } else if (nota < menorNum) {
      menorNum = nota;
    }

    somaNotasTotal += nota;
  }

  let media = somaNotasTotal / notas.length;

  console.log(`A média total da turma foi de: ${media.toFixed(2).replaceAll('.', ',')}.
Já a maior nota foi de: ${maiorNum.toFixed(2).replaceAll('.', ',')}.
E a menor nota foi de: ${menorNum.toFixed(2).replaceAll('.', ',')}`);
}

analisarNotas2(notasDaTurma);
