var spinner;

spinner = document.getElementById('spinner-container');

document.onreadystatechange = function() {
  if (document.readyState === "complete") {
    spinner.classList.add('hidden');
    return setTimeout(function() {
      return spinner.style.display = "none";
    }, 500);
  }
};
