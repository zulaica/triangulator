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

$(document).ready(function() {
  $("form").submit(function(event) {
    $("#triangle").hide();
    $("#error").hide();

    var x = parseInt($("#x_value").val());
    var y = parseInt($("#y_value").val());
    var z = parseInt($("#z_value").val());

    var result = triangulator(x,y,z);

    if (result === "nope") {
      $("#error p").text("Sorry, buddy, but at least one of those lengths is too short to make a triangle. Try again.");
      $("#error").show()
    } else if (result === "impossible") {
      $("#error p").text("Are you for serious?! You can't make a triangle with any values less than or equal to zero. That's unpossible in the third dimension.");
      $("#error").show()
    } else {
      $("#x").text(x);
      $("#y").text(y);
      $("#z").text(z);
      $("#type").text(result);
      if (result === "scalene") {
        $("#article").text("a");
      } else {
        $("#article").text("an");
      }
      $("#triangle").show()
    }

    $("#result").show();
    event.preventDefault();
  });
});
