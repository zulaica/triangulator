describe("triangulator", function() {
  it("returns 'equilateral' if all three inputs are equal", function() {
    expect(triangulator(3,3,3)).to.equal("equilateral");
  });

  it("returns 'isosceles' if exactly two inputs are equal", function() {
    expect(triangulator(3,1,3)).to.equal("isosceles");
  });

  it("returns 'scalene' if exactly two inputs are equal", function() {
    expect(triangulator(4,5,6)).to.equal("scalene");
  });

  it("detrmines whether the three inputs could make a triangle", function() {
    expect(triangulator(2,2,8)).to.equal("nope");
  });

  it("checks to see if any input is less than or equal to zero", function() {
    expect(triangulator(1,1,0)).to.equal("impossible");
  });
});
