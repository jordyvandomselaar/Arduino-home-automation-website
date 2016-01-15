buttons = document.getElementsByClassName "button"
toggles = document.getElementsByClassName "toggle"

handle_click = () ->
	if this.classList.contains "toggle"
		if !if_clicked this
			state = parseInt this.getAttribute "active"

	else if this.classList.contains "button"
		state = this.getAttribute "trigger"

	if !if_clicked this
		state = parseInt state
		url = "?button=#{this.id}&state=#{state}"
		ajax_get url
		this.clicked = 1
		setTimeout =>
					this.clicked = 0
				, 2000



for button in buttons
	button.addEventListener 'click', handle_click

for toggle in toggles
	toggle.addEventListener 'click', handle_click

