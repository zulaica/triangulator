var triangulator = function(x,y,z) {
  var triangle = "";

  if (x + y >= z && x + z >= y && y + z >= x) {
    if (x === y && y === z) {
      triangle = "equilateral";
    } else if (x === y || y === z || x === z) {
      triangle = "isosceles";
    } else {
      triangle = "scalene";
    }
  } else {
    triangle = "nope";
  }

  if (x <= 0 || y <= 0 || z <= 0) {
    triangle = "impossible";
  }

  return triangle;
};
