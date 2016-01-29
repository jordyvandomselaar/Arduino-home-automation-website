temperature = document.getElementById "temperature"

setTemp = ->
	ajax_get "?getTemperature", (response) ->
		tempColor response
		temperature.innerHTML = response
		setTimeout setTemp, 1000




tempColor = (temp) ->
	if temp > 22 and temp < 26
		temperature.style.color = "#0F0" # Fishes swim
	if temp > 30
		temperature.style.color = "#F00" # Fishes Fry
	else
		temperature.style.console = "#2196f3" # Fish stick



setTemp()
