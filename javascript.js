var triangle=function(firstSide, secondSide, thirdSide){
  if(aTriangle(firstSide+secondSide >thirdSide)){
    alert "triangle"
  }else {
    alert "this is not a triangle"
  }
};
var aTriangle=function(firstSide,secondSide,thirdSide){
  if (firstSide===secondSide&secondSide===thirdSide){
    alert "equilateral";
  }elseif(secondSide===firstSide || firstSide===thirdSide ||thirdSide===secondSide){
  alert "isosceles"}
}else {
  alert "scalene"
}
