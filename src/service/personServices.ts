import { Person } from "../types/person.type";
import { personList } from "../data/personData";

export function filterById(id: number): Person[] {
  return personList.filter((p) => {
    return p.id === id;
  });
}

export const addPerson = (body: Person): Person[] => {
  const { id, age, gender, type, name } = body;
  personList.push({ id, age, gender, type, name });
  return personList;
};
