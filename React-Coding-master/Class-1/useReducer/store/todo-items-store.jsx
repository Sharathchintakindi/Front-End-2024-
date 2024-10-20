import { createContext, useReducer } from "react";

export const TodoItemsContext = createContext([
  {
    todoListItems: [],
    addNewItem: () => {},
    deleteItem: () => {},
  },
]);

const toDoItemsReducer = (currentToDoItems, action) => {
  let newItems = currentToDoItems;
  if (action.type === "NEW_ITEM") {
    newItems = [
      ...currentToDoItems,
      { name: action.payload.itemName, DueDate: action.payload.itemDueDate },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newItems = currentToDoItems.filter(
      (item) => item.name !== action.payload.itemName
    );
  }
  return newItems;
};

const ToDoItemsContextProvider = ({ children }) => {
  const [todoListItems, dispatchNewToDoItems] = useReducer(
    toDoItemsReducer,
    []
  );
  const addNewItem = (itemName, itemDueDate) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: { itemName, itemDueDate },
    };
    dispatchNewToDoItems(newItemAction);
  };
  const deleteItem = (todoItemName) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        itemName: todoItemName,
      },
    };
    dispatchNewToDoItems(deleteItemAction);
  };

  return (
    <TodoItemsContext.Provider
      value={{ todoListItems, addNewItem, deleteItem }}
    >
      {children}
    </TodoItemsContext.Provider>
  );
};
export default ToDoItemsContextProvider;
