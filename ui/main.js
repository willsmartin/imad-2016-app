//Counter code
var button = document.getElementById('counter');
var counter = 0;
button.onclick = function() {
  //Make a request to the counter end point
  var request = XMLHttpRequest();
  //Capture the response and store it in a variable
  request.onreadystatechange = function () {
    if(request.readystate === XMLHttpRequest.DONE) {
     if(request.status === 200)   {
         var counter = request.response.Text;
         var span = document.getElementById('count');
         span.innerHTML = counter.toString();
     }
    }
  };
};