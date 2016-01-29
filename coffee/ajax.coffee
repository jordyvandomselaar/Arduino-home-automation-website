ajax_get = (url, callback) ->
	xhr = new XMLHttpRequest()
	xhr.open 'GET', url
	xhr.send null


	xhr.onreadystatechange = () ->
		DONE = 4
		OK = 200

		if xhr.readyState is DONE
			if xhr.status is OK
				response =  this.responseText
				return callback response

			return "Error! #{xhr.responseText}"
