import { v4 as uuidv4 } from "uuid";

export function todoGenerator(label) {
  return {
    id: uuidv4(),
    label: label,
    completed: false,
    editMode: false,
  };
}
