const findSpaceship = require('../src/findSpaceship');

describe('findSpaceship', () => {
  it('should return "Spaceship lost forever." if there is no spaceship on the map', () => {
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
