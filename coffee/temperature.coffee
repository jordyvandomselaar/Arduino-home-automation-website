temperature = document.getElementById "temperature"

temp = parseInt temperature.innerHTML

temperatureLoop = setInterval ->
	ajax_get "?getTemperature", (response) ->
		# console.log response
		# Set the temp inside the span#temperature
		# tempColor(response)
, 2000


tempColor = (temp) ->
	if temp >= 50
		temperature.style.color = "#F00"
	else
		temperature.style.console = "#2196f3"