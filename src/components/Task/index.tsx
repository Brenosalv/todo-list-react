import { useState } from 'react';
import CheckedBox from '../../assets/checkedBox.svg';
import Trash from '../../assets/trash.svg';
import UncheckedBox from '../../assets/uncheckedBox.svg';
import { TaskType } from '../TodoList/todoList.model';
import styles from './task.module.css';

interface TaskProps extends TaskType {
  onRemoveTask: (taskToBeRemovedId: string, isTaskDone?: boolean) => void;
  onDoneTaskCountChange: (isTaskDone: boolean) => void;
}

export const Task = ({ text, isDone, id, onRemoveTask, onDoneTaskCountChange }: TaskProps) => {
  const [isTaskDone, setIsTaskDone] = useState(isDone);

  function handleCheckboxClick() {
    setIsTaskDone(isTaskDone => !isTaskDone);
    onDoneTaskCountChange(isTaskDone);
  }

  return (
    <div className={isTaskDone ? styles.doneTaskContainer : styles.notDoneTaskContainer}>
      {isTaskDone ? (
        <img
          src={CheckedBox}
          width={24}
          height={24}
          alt="Done"
          onClick={handleCheckboxClick}
        />
      ) : (
        <img
          src={UncheckedBox}
          width={24}
          height={24}
          alt="Not done"
          onClick={handleCheckboxClick}
        />
      )}

      <p className={styles.text}>
        {text}
      </p>

      <img
        src={Trash}
        width={24}
        height={24}
        alt="Trash"
        className={styles.trash}
        onClick={() => onRemoveTask(id, isTaskDone)}
      />
    </div>
  );
}
