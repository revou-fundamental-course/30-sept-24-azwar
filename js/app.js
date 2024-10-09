document
  .getElementById("temperatureForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const temperature = parseFloat(
      document.getElementById("temperatureInput").value
    );
    const fromUnit = document.getElementById("fromUnit").value;
    const toUnit = document.getElementById("toUnit").value;

    let result = 0;

    // Konversi suhu
    if (fromUnit === "celcius") {
      if (toUnit === "fahrenheit") {
        result = (temperature * 9) / 5 + 32;
      } else if (toUnit === "kelvin") {
        result = temperature + 273.15;
      } else {
        result = temperature;
      }
    } else if (fromUnit === "fahrenheit") {
      if (toUnit === "celcius") {
        result = ((temperature - 32) * 5) / 9;
      } else if (toUnit === "kelvin") {
        result = ((temperature - 32) * 5) / 9 + 273.15;
      } else {
        result = temperature;
      }
    } else if (fromUnit === "kelvin") {
      if (toUnit === "celcius") {
        result = temperature - 273.15;
      } else if (toUnit === "fahrenheit") {
        result = ((temperature - 273.15) * 9) / 5 + 32;
      } else {
        result = temperature;
      }
    }

    document.getElementById("result").innerText = `Hasil: ${result.toFixed(
      2
    )}° ${toUnit.charAt(0).toUpperCase() + toUnit.slice(1)}`;
  });
