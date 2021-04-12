import { useContext } from 'react';
import { RiDeleteBinLine } from 'react-icons/ri';
import { FaUserCircle } from 'react-icons/fa';
import { AppContext } from '../Context';

const Task = ({
  categoryId,
  task,
  handleDragOver,
  handleDragStart,
  handleDrop,
}) => {
  const { removeTask } = useContext(AppContext);

  return (
    <div
      className="card"
      draggable
      onDragOver={e => handleDragOver(e)}
      onDragStart={e => handleDragStart(e, categoryId, task.id)}
      onDrop={e => handleDrop(e, categoryId, task.id)}
    >
      <div className="card__header">
        <time>{new Date(task.id).toLocaleDateString()}</time>
      </div>
      <div className="card__text">
        <h4>{task.title}</h4>
        <p>{task.description}</p>
      </div>
      <div className="card__footer">
        <div className="avatar">
          <FaUserCircle />
        </div>
        <button
          className="btn delete_btn"
          onClick={() => removeTask(categoryId, task.id)}
        >
          <RiDeleteBinLine />
        </button>
      </div>
    </div>
  );
};

export default Task;
