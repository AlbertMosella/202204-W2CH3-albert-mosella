function calculadora(x, y) {
  let raizX = Math.sqrt(x);
  raizX = Math.round(raizX * 1000) / 1000;
  let raizY = Math.sqrt(y);
  raizY = Math.round(raizY * 1000) / 1000;

  const resultadoSuma = Number(x) + Number(y);
  const resultadoResta = x - y;
  const resultadoMultiplicacion = x * y;
  const resultadoDivision = x / y;
  const arrayResultados = [];
  arrayResultados.push(Math.round(resultadoSuma * 1000) / 1000);
  arrayResultados.push(Math.round(resultadoResta * 1000) / 1000);
  arrayResultados.push(Math.round(resultadoMultiplicacion * 1000) / 1000);
  arrayResultados.push(Math.round(resultadoDivision * 1000) / 1000);
  arrayResultados.push(raizX);
  arrayResultados.push(raizY);

  return arrayResultados;
}

module.exports = calculadora;
