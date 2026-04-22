import validator from "validator";
import { Person } from "../types/person.type";

export const validatePersonCreation = (p: Person) => {
  if (
    p.name === undefined ||
    p.age == null ||
    !validator.isAlpha(p.name, "en-US", { ignore: " " })
  ) {
    return false;
  }
  return true;
};

export const isValidId = (id: number) => {
  if (!Number.isInteger(id) || id <= 0) {
    return false;
  }
  return true;
};
