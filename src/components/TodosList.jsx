import TodoItem from "./TodoItem";
import PropTypes from 'prop-types';

const TodoList = (props) => {
  const { todosProps, handleChange, delTodo } = props;
  return (
    <>
      <ul>
        {
          todosProps.map((todo) => (
            <TodoItem key={todo.id} itemProp={todo} handleChange={handleChange} delTodo={delTodo} />
          ))
        }
      </ul>
    </>
  );
};

TodoList.propTypes = {
  todosProps: PropTypes.array.isRequired,
  handleChange: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
};

export default TodoList;