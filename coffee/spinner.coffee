spinner = document.getElementById 'spinner-container'
document.onreadystatechange = () ->
	if(document.readyState == "complete")
		spinner.classList.add 'hidden'
		setTimeout ->
			spinner.style.display = "none"
		,500
