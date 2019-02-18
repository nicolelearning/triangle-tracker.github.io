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
      {
      return num1+num2;
        }
        var one = parseInt(firstSide.value);
        var two = parseInt(secondSide.value);
        var three = parseInt(thirdSide.value);
        var possibilityOne=check(one,two);
        var possibilityTwo=check(two,three);
        var possibilityThree=check(three,one);
        if(possibilityOne===three || possibilityOne<three)
