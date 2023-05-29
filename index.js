// Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    let input = ((parseInt(celsius.value) * 9) / 5 + 32).toFixed(2);
  }
  
  // Function to convert Fahrenheit to Celsius
  function fahrenheitToCelsius(fahrenheit) {
        let input = ((parseInt(fahrenheit.value - 32) * (5/9 ) )).toFixed(2);
      
  }
  
  // Prompt the user for input
  let temperature = parseFloat(prompt("Enter the temperature:"));
  let conversionType = prompt("Choose the conversion type: (Celsius to Fahrenheit or Fahrenheit to Celsius)");
  
  if (conversionType.toLowerCase() === "celsius to fahrenheit") {
    fahrenheit.value = output;
  } else if (conversionType.toLowerCase() === "fahrenheit to celsius") {
    celsius.value = output;
  } else {
    alert("Invalid conversion type.");
  }