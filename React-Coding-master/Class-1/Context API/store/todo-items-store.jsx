import { createContext } from "react";

export const TodoItemsContext = createContext([
  {
    todoListItems: [],
    addNewItem: () => {},
    deleteItem: () => {},
  },
]);
