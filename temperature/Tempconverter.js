function convertToCelsius() {
  var fahrenheitInput = document.getElementById("f-input").value;
  var celsius = ((fahrenheitInput - 32) * 5) / 9;
  document.getElementById("c-input").value = celsius.toFixed(2);
}

function convertToFahrenheit() {
  var celsiusInput = document.getElementById("c-input").value;
  var fahrenheit = (celsiusInput * 9) / 5 + 32;
  document.getElementById("f-input").value = fahrenheit.toFixed(2);
}
