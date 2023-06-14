import { useState } from 'react';
import ClipboardIcon from '../../assets/clipboard.svg';
import { Task } from '../Task';
import { TaskType } from './todoList.model';
import styles from './todoList.module.css';

interface TodoListProps {
  tasks: TaskType[];
  onRemoveTask: (taskToBeRemovedId: string) => void;
}

export const TodoList = ({ tasks, onRemoveTask }: TodoListProps) => {
  const initalDoneTasksCount = tasks.filter(task => task.isDone).length;

  const [doneTasksCount, setDoneTasksCount] = useState(initalDoneTasksCount);

  function handleDoneTaskCountChange(isTaskDone: boolean) {
    setDoneTasksCount(doneTasksCount => isTaskDone ? doneTasksCount - 1 : doneTasksCount + 1);
  }

  function handleRemoveTask(taskToBeRemovedId: string, isTaskDone?: boolean) {
    onRemoveTask(taskToBeRemovedId);

    if (isTaskDone) {
      setDoneTasksCount(doneTasksCount => doneTasksCount - 1);
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p className={styles.addedTasks}>
          Added tasks
          <span className={styles.taskCounter}>{tasks.length}</span>
        </p>

        <p className={styles.finishedTasks}>
          Done
          <span className={styles.taskCounter}>{doneTasksCount} de {tasks.length}</span>
        </p>
      </div>

      <div className={styles.list}>
        {tasks.length > 0 ? (
          tasks.map(task => (
            <Task
              key={task.id}
              id={task.id}
              isDone={task.isDone}
              text={task.text}
              onDoneTaskCountChange={handleDoneTaskCountChange}
              onRemoveTask={handleRemoveTask}
            />
          ))
        ) : (
          <div className={styles.emptyListContainer}>
            <hr className={styles.hr} />

            <div className={styles.emptyListContentContainer}>
              <img src={ClipboardIcon} alt="Clipboard icon" />

              <p>You still don't have tasks</p>
              <p>Add tasks and organize your items to do</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
