var temp, tempColor, temperature, temperatureLoop;

temperature = document.getElementById("temperature");

temp = parseInt(temperature.innerHTML);

temperatureLoop = setInterval(function() {
  return ajax_get("?getTemperature", function(response) {});
}, 2000);

tempColor = function(temp) {
  if (temp >= 50) {
    return temperature.style.color = "#F00";
  } else {
    return temperature.style.console = "#2196f3";
  }
};
