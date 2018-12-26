var loginButton = document.getElementById("login");
loginButton.onclick = sendAuthHeader;


function sendAuthHeader() {
  if (window.fetch) {
    fetch('http://localhost:3000/login', {
        credentials: 'include',
        headers: new Headers({
          "fetch": "true"
        })
      })
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        window.location.replace(data.link);
      })
      .catch(function(error) {
        window.location.replace(error.link);
      })
  } else {
     var xhr = new XMLHttpRequest();
     xhr.open("GET", "http://localhost:3000/login", true);
     xhr.withCredentials = true;
     xhr.setRequestHeader("fetch", "true");
     xhr.onload = success;
     xhr.onerror = fail;
     xhr.send();
     function success(){
       var data = JSON.parse(xhr.responseText);
       window.location.replace(data.link);
     }
     function fail (){
       var data = JSON.parse(xhr.responseText);
       window.location.replace(data.link);
     }
 }
}
