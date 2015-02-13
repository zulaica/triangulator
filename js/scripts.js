var triangulator = function(x,y,z) {
  var triangle = "";

  if (x + y > z && x + z > y && y + z > x) {
    if (x === y && y === z) {
      triangle = "equilateral";
    } else if (x === y || y === z) {
      triangle = "isosceles";
    } else {
      triangle = "scalene";
    }
  } else {
    triangle = "nope";
  }

  return triangle;
};
