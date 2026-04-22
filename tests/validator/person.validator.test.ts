import { isValidId } from "../../src/validator/person.validator";

describe("test isValidId validator function", () => {
  it("should return true if the given id is an integer", () => {
    //Given
    const id = 15;

    //When
    const result = isValidId(id);

    //Then
    expect(result).toBeTruthy();
  });
  it("should return false if the given id is a string", () => {
    //Given
    const id = "aa" as unknown as number;

    //When
    const result = isValidId(id);

    //Then
    expect(result).toBeFalsy();
  });
});
