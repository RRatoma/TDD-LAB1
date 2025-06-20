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

  it("should return [0, 0] if the spaceship is at bottom left corner", function () {
  const map =
    "..........\n" +
    "..........\n" +
    "..........\n" +
    "..........\n" +
    "..........\n" +
    "X.........";

  expect(findSpaceship(map)).toEqual([0, 0]);
});

it("should return [9, 5] if the spaceship is at top right corner", function () {
  const map =
    ".........X\n" +
    "..........\n" +
    "..........\n" +
    "..........\n" +
    "..........\n" +
    "..........";

  expect(findSpaceship(map)).toEqual([9, 5]);
});

});
