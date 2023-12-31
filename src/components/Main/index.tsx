import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { SearchBar } from "../SearchBar";
import { TodoList } from "../TodoList";
import { TaskType } from "../TodoList/todoList.model";
import styles from './main.module.css';

export const Main = () => {
  const [tasks, setTasks] = useState<TaskType[]>([]);

  function handleAddTask(newTaskText: string) {
    event?.preventDefault();

    const newTask = {
      id: uuidv4(),
      isDone: false,
      text: newTaskText
    }

    if (newTask.text.length > 0) {
      setTasks(tasks => [...tasks, newTask]);
    }
  }

  function handleRemoveTask(taskToBeRemovedId: string) {
    setTasks(tasks => tasks.filter(task => task.id !== taskToBeRemovedId));
  }

  return (
    <main className={styles.main}>
      <SearchBar onSubmit={handleAddTask} />
      <TodoList tasks={tasks} onRemoveTask={handleRemoveTask} />
    </main>
  );
}
