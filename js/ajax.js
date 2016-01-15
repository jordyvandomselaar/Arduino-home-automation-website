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
