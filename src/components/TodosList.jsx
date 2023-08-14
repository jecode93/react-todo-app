import TodoItem from "./TodoItem";
import PropTypes from 'prop-types';

const TodoList = (props) => {
  const { todosProps } = props;
  return (
    <>
      <ul>
        {
          todosProps.map((todo) => (
            <TodoItem key={todo.id} itemProp={todo} />
          ))
        }
      </ul>
    </>
  );
};

TodoList.propTypes = {
  todosProps: PropTypes.array.isRequired,
};

export default TodoList;