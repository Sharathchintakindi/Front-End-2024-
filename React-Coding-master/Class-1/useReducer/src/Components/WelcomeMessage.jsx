import { useContext } from "react";
import styles from "./welcomeMessage.module.css";
import { TodoItemsContext } from "../../store/todo-items-store";

function WelcomeMessage() {
  const { todoListItems } = useContext(TodoItemsContext);

  return (
    todoListItems.length === 0 && (
      <p className={styles.welcome}> Enjoy Your day</p>
    )
  );
}

export default WelcomeMessage;
