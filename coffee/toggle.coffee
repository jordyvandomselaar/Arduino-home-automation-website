toggles = document.getElementsByClassName "toggle"

for toggle in toggles
	toggle.addEventListener 'click', ->
		if !if_clicked this
			state = parseInt this.getAttribute "active"
			newState = toggle_state state

			this.setAttribute "active", newState



if_clicked = (button) ->
	if button.clicked is 1 and typeof button.clicked isnt "undefined" then return true
	else return false

toggle_state = (state) ->
	if state is 1
		return 0
	else
		return 1


