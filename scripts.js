
var ajax_get;

ajax_get = function(url) {
  var xhr;
  xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.send(null);
  return xhr.onreadystatechange = function() {
    var DONE, OK;
    DONE = 4;
    OK = 200;
    if (xhr.readyState === DONE) {
      if (xhr.status === OK) {
        return "Everything went fine";
      }
      return "Error! " + xhr.responseText;
    }
  };
};

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
