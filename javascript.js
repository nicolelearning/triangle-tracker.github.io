var submit = function() {
  var firstSide = document.getElementById("first");
  var secondSide = document.getElementById("second");
  var thirdSide = document.getElementById("third");
  if(firstSide.value === "" || secondSide.value === "" || thirdSide.value === "")
  {
    alert("fill in");
  }
  else
  {
      function check(num1,num2)
