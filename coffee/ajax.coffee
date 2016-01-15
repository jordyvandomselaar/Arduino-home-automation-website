ajax_get = (url) ->
	xhr = new XMLHttpRequest()
	xhr.open 'GET', url
	xhr.send null


	xhr.onreadystatechange = () ->
		DONE = 4
		OK = 200

		if xhr.readyState is DONE
			if xhr.status is OK
				return "Everything went fine"
			return "Error! #{xhr.responseText}"