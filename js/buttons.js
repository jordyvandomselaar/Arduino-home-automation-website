var button, buttons, handle_click, i, j, len, len1, toggle, toggles;

buttons = document.getElementsByClassName("button");

toggles = document.getElementsByClassName("toggle");

handle_click = function() {
  var state, url;
  if (this.classList.contains("toggle")) {
    if (!if_clicked(this)) {
      state = parseInt(this.getAttribute("active"));
    }
  } else if (this.classList.contains("button")) {
    state = this.getAttribute("trigger");
  }
  if (!if_clicked(this)) {
    state = parseInt(state);
    url = "?button=" + this.id + "&state=" + state;
    ajax_get(url);
    this.clicked = 1;
    return setTimeout((function(_this) {
      return function() {
        return _this.clicked = 0;
      };
    })(this), 2000);
  }
};

for (i = 0, len = buttons.length; i < len; i++) {
  button = buttons[i];
  button.addEventListener('click', handle_click);
}

for (j = 0, len1 = toggles.length; j < len1; j++) {
  toggle = toggles[j];
  toggle.addEventListener('click', handle_click);
}
