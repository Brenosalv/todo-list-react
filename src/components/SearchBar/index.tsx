import { ChangeEvent, useState } from 'react';
import PlusIcon from '../../assets/plus.svg';
import styles from './searchBar.module.css';

interface SearchBarProps {
  onSubmit: (newTaskText: string) => void;
}

export const SearchBar = ({ onSubmit }: SearchBarProps) => {
  const [newTaskText, setNewTaskText] = useState('');

  function handleTaskTextChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTaskText(event.target.value);
  }

  function handleSubmit() {
    onSubmit(newTaskText);

    setNewTaskText('');
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={styles.container}
    >

      <input
        type='text'
        className={styles.input}
        placeholder='Add a new task'
        onChange={handleTaskTextChange}
        value={newTaskText}
      />

      <button
        className={styles.button}
        type='submit'
        disabled={newTaskText.length === 0}
      >
        <span>
          Add
        </span>

        <img
          src={PlusIcon}
          alt="Plus icon"
        />
      </button>
    </form>
  );
}
