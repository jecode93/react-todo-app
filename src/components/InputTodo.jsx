import { useState } from "react";
import PropTypes from 'prop-types';

const InputTodo = (props) => {
  const { addTodoItem } = props;
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if(title.trim()){
      addTodoItem(title);
      setTitle('');
      setMessage('')
    } else {
      setMessage('Please, add item');
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Add todo..." value={title} onChange={handleChange} />
        <button>Submit</button>
      </form>
      <span>{message}</span>
    </>
  );
};

InputTodo.propTypes = {
  addTodoItem: PropTypes.func.isRequired,
}

export default InputTodo;