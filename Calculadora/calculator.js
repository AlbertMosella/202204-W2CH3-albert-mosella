function calculadora() {
  var x, y;
  x = prompt("Introduce un numero");
  y = prompt("Introduce un segundo numero");
  if (
    x !== NaN &&
    x.length !== 0 &&
    (typeof y === "undefined" || y.length === 0)
  ) {
    let raizX = Math.sqrt(x);
    alert(
      "La raiz cuadrada de " + x + " es: " + Math.round(raizX * 1000) / 1000
    );
  } else if (
    y !== NaN &&
    y.length !== 0 &&
    (typeof x === "undefined" || x.length === 0)
  ) {
    let raizY = Math.sqrt(y);
    alert(
      "La raiz cuadrada de " + y + " es: " + Math.round(raizY * 1000) / 1000
    );
  } else if (isNaN(x) || x.length === 0 || isNaN(y) || y.length === 0) {
    alert("Uno o más elementos no son numeros, introduce numeros");
  } else {
    let resultado = [];
    resultado.push(Number(x) + Number(y));
    resultado.push(x - y);
    resultado.push(x * y);
    resultado.push(x / y);
    alert(
      "Resultados:" +
        "\n El resultado de la suma es " +
        Math.round(resultado[0] * 1000) / 1000 +
        "\n El resultado de la resta es " +
        Math.round(resultado[1] * 1000) / 1000 +
        "\n El resultado de la multiplicacion es " +
        Math.round(resultado[2] * 1000) / 1000 +
        "\n El resultado de la division es " +
        Math.round(resultado[3] * 1000) / 1000
    );
  }
}
calculadora();
