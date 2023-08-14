import PropTypes from 'prop-types';

const TodoItem = (props) => {
  const { itemProp } = props;
  return (
    <>
      <li>{itemProp.title}</li>
    </>
  );
};

TodoItem.propTypes = {
  itemProp: PropTypes.object.isRequired,
};

export default TodoItem;