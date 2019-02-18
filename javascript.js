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
        {
          alert ("not a triangle")
        }
        else if (possibilityTwo===one || possibilityTwo<one)
        {
        alert ("not a triangle")
        }
        else if (possibilityThree===two || possibilityThree<two)
        {
        alert ("not a triangle")
        }
        else
        {
      if (one===two&&two===three&&three===one)
      {
        alert ("equilateral")
      }
      else if (one===two||two===three||three===one)
      {
        alert ("Isosceles")
      }
      else
      {
        alert ("scalene")
      }
    }
  }
}
