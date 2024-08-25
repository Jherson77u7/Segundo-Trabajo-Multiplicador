import sumar from "./sumador";
import multiplicar from "./Multiplicador";

// Elementos para la suma
const firstSum = document.querySelector("#primer-numero-sumar");
const secondSum = document.querySelector("#segundo-numero-sumar");
const sumarButton = document.querySelector("#sumar-button");
const sumaDiv = document.querySelector("#resultado-suma-div");

// Elementos para la multiplicación
const firstMultiply = document.querySelector("#primer-numero-multiplicar");
const secondMultiply = document.querySelector("#segundo-numero-multiplicar");
const multiplicarButton = document.querySelector("#multiplicar-button");
const multiplicacionDiv = document.querySelector("#resultado-multiplicacion-div");

// Event listener para sumar
sumarButton.addEventListener("click", () => {
  const firstNumber = Number.parseInt(firstSum.value);
  const secondNumber = Number.parseInt(secondSum.value);

  sumaDiv.innerHTML = "<p>Suma: " + sumar(firstNumber, secondNumber) + "</p>";
});

// Event listener para multiplicar
multiplicarButton.addEventListener("click", () => {
  const firstNumber = Number.parseInt(firstMultiply.value);
  const secondNumber = Number.parseInt(secondMultiply.value);

  multiplicacionDiv.innerHTML = "<p>Multiplicación: " + multiplicar(firstNumber, secondNumber) + "</p>";
});
