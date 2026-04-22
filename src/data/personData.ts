import { GENDER, Person, TYPE } from "../types/person.type";

//Enums
export const personList: Person[] = [
  {
    id: 11,
    name: "Mia Taylor",
    age: 26,
    gender: GENDER.female,
    type: TYPE.women,
  },
  { id: 12, name: "Lucas Moore", age: 8, gender: GENDER.male, type: TYPE.kid },
  {
    id: 13,
    name: "Charlotte Jackson",
    age: 19,
    gender: GENDER.female,
    type: TYPE.women,
  },
  { id: 14, name: "Henry White", age: 60, gender: GENDER.male, type: TYPE.men },
  {
    id: 15,
    name: "Amelia Harris",
    age: 5,
    gender: GENDER.female,
    type: TYPE.kid,
  },
];
