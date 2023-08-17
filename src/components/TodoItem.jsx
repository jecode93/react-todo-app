import PropTypes from 'prop-types';
import styles from '../styles/TodoItem.module.css'
import { useState } from 'react';
import { FaTrash } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";


const TodoItem = (props) => {
  const { itemProp, handleChange, delTodo, setUpdate } = props;
  const [editing, setEditing] = useState(false);

  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };

  const handleEditing = () => {
    setEditing(true);
  };

  let viewMode = {};
  let editMode = {};
  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }

  const handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      setEditing(false);
    }
  };

  return (
    <>
      <li className={styles.item}>
        <div className={styles.content} style={viewMode}>
          <input type='checkbox' checked={itemProp.completed} onChange={() => handleChange(itemProp.id)} />
          <button  onClick={handleEditing}>
            <AiFillEdit style={{ color: "#5e5e5e", fontSize: "16px" }} />
          </button>
          <button onClick={() => delTodo(itemProp.id)}>
            <FaTrash style={{ color: "#5e5e5e", fontSize: "16px" }} />
          </button>
          <span style={itemProp.completed? completedStyle : null}>
            {itemProp.title}
          </span>
        </div>
        <input
          type="text"
          value={itemProp.title}
          className={styles.textInput}
          style={editMode}
          onChange={(e) => setUpdate(e.target.value, itemProp.id)}
          onKeyDown={handleUpdatedDone}
        />
      </li>
    </>
  );
};

TodoItem.propTypes = {
  itemProp: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
  setUpdate: PropTypes.func.isRequired,
};

export default TodoItem;