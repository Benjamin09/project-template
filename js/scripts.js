// back end
var factorial= function(number){
  console.log(number);
  var result= 1;
  for(var i = 1; i <= number; i+=1) {
    result *= i;
  }
  return result;
}


// front end
$(function() {
  $("form#input").submit(function(event) {

    //input
    var num = parseInt($("#number").val());
    console.log(num);
    //output
    $("#output").text(factorial(num));
    event.preventDefault();
  });
});
