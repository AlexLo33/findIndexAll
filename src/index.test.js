import "./";

describe("Find Index all", () => {
  let filterByAge;

  beforeAll(() => {
    filterByAge = (user) => user.age < 18;
  });

  it("Should returns an empty array if no matching", () => {
    const users = [
      {
        name: "Patrick",
        age: 25,
      },
    ];

    const expectedResult = [];

    expect(users.findIndexAll(filterByAge)).toEqual(expectedResult);
  });

  it("Should returns all the index matching", () => {
    const users = [
      {
        name: "John",
        age: 10,
      },
      {
        name: "Alex",
        age: 19,
      },
      {
        name: "Maria",
        age: 4,
      },
      {
        name: "Bertrand",
        age: 8,
      },
      {
        name: "Patrick",
        age: 25,
      },
    ];

    const expectedResult = [0, 2, 3];

    expect(users.findIndexAll(filterByAge)).toEqual(expectedResult);
  });
});
