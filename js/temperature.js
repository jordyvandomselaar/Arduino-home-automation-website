var setTemp, tempColor, temperature;

temperature = document.getElementById("temperature");

setTemp = function() {
  return ajax_get("?getTemperature", function(response) {
    tempColor(response);
    temperature.innerHTML = response;
    return setTimeout(setTemp, 1000);
  });
};

tempColor = function(temp) {
  if (temp > 22 && temp < 26) {
    temperature.style.color = "#0F0";
  }
  if (temp > 30) {
    return temperature.style.color = "#F00";
  } else {
    return temperature.style.console = "#2196f3";
  }
};

setTemp();
