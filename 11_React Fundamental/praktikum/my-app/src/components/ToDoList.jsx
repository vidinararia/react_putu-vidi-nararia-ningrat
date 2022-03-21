import styles from "./ToDoList.module.css";

export default function ToDoList({ user }) {
  if (user.completed === true) {
    return (
      <div
        className={styles.titleContent}
        style={{ textDecoration: "line-through" }}
      >
        {user.title}
      </div>
    );
  } else {
    return <div className={styles.titleContent}>{user.title}</div>;
  }
}
