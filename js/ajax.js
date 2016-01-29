var ajax_get;

ajax_get = function(url, callback) {
  var xhr;
  xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.send(null);
  return xhr.onreadystatechange = function() {
    var DONE, OK, response;
    DONE = 4;
    OK = 200;
    if (xhr.readyState === DONE) {
      if (xhr.status === OK) {
        response = this.responseText;
        return callback(response);
      }
      return "Error! " + xhr.responseText;
    }
  };
};
