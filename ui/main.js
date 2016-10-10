//Creat the request object

//Counter code
var button = document.getElementById('counter');
button.onclick = function() {
  //Create a request object
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
  
  //Make the request
  request.open('GET', 'http://willsmartin.imad.hasura-app.io/counter', true);
  request.send(null);
};