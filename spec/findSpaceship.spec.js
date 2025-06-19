describe("findSpaceship", function () {
  it("should return 'Spaceship lost forever.' if there is no X on the map", function () {
    const map =
      "..........\n" +
      "..........\n" +
      "..........\n" +
      "..........\n" +
      "..........\n" +
      "..........";

    expect(findSpaceship(map)).toBe("Spaceship lost forever.");
  });
  
  it("should return [7, 2] if the spaceship is at row 3, column 7", function () {
  const map =
    "..........\n" +
    "..........\n" +
    "..........\n" +
    ".......X..\n" +
    "..........\n" +
    "..........";

  expect(findSpaceship(map)).toEqual([7, 2]);
});

});
