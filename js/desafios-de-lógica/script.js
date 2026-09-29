'use strict';

/**
 * @param {number} numero
 * @returns {string}
 */
function formatarNumeros(numero) {
  return numero.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @returns {number}
 */
function resolverDelta(a, b, c) {
  return b ** 2 - 4 * a * c;
}

/**
 * @param {number} a
 * @param {number} b
 * @param {number} delta
 * @returns {string}
 */

function resolverEquacao(a, b, delta) {
  if (a === 0) {
    return 'O coeficiente "a" deve ser diferente de 0 para que seja uma função do 2º grau.';
  }

  let resultado;

  if (delta > 0) {
    const raizDeX1 = (-b + Math.sqrt(delta)) / (2 * a);
    const raizDeX2 = (-b - Math.sqrt(delta)) / (2 * a);
    resultado = `Como delta é maior que zero (${delta}), temos x¹ = ${formatarNumeros(raizDeX1)}.
    Já para a segunda raiz, temos x² = ${formatarNumeros(raizDeX2)}.`;
  } else if (delta === 0) {
    const raizUnica = -b / (2 * a);
    resultado = `Como delta = 0, temos que x¹ e x² = ${formatarNumeros(raizUnica)}.`;
  } else {
    resultado = `Como delta é menor que zero (${delta}), não temos raízes reais para x.`;
  }

  return resultado;
}

const formulario = document.getElementById('form-equacao');
const deltaResultado = document.getElementById('delta');
const divResultado = document.getElementById('resultado');

formulario.addEventListener('submit', function (event) {
  event.preventDefault();

  const a = Number(document.getElementById('coef-a').value);
  const b = Number(document.getElementById('coef-b').value);
  const c = Number(document.getElementById('coef-c').value);

  if (a === 0) {
    deltaResultado.textContent = '';
    divResultado.textContent = 'O coeficiente "a" deve ser diferente de 0.';
    return;
  }

  const delta = resolverDelta(a, b, c);
  deltaResultado.textContent = `O resultado do delta foi de: ${delta}`;

  const resultadoEquacao = resolverEquacao(a, b, delta);
  divResultado.innerHTML = resultadoEquacao;
});
