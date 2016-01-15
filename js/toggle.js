var i, if_clicked, len, toggle, toggle_state, toggles;

toggles = document.getElementsByClassName("toggle");

for (i = 0, len = toggles.length; i < len; i++) {
  toggle = toggles[i];
  toggle.addEventListener('click', function() {
    var newState, state;
    if (!if_clicked(this)) {
      state = parseInt(this.getAttribute("active"));
      newState = toggle_state(state);
      return this.setAttribute("active", newState);
    }
  });
}

if_clicked = function(button) {
  if (button.clicked === 1 && typeof button.clicked !== "undefined") {
    return true;
  } else {
    return false;
  }
};

toggle_state = function(state) {
  if (state === 1) {
    return 0;
  } else {
    return 1;
  }
};
