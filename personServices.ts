import { Person } from "./person.type";
import { personList } from "./personData";

export function filterById(id: number): Person[] {
  return personList.filter((p) => {
    return p.id == id;
  });
}


