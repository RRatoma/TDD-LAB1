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
});
