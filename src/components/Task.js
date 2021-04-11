import { useContext } from 'react';
import { RiDeleteBinLine } from 'react-icons/ri';
import { FaUserCircle } from 'react-icons/fa';
import { AppContext } from '../Context';

const Task = ({ categoryId, id, title, description }) => {
  const { removeTask } = useContext(AppContext);

  return (
    <div className="card">
      <div className="card__header">
        <time>{new Date(id).toLocaleDateString()}</time>
      </div>
      <div className="card__text">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
      <div className="card__footer">
        <div className="avatar">
          <FaUserCircle />
        </div>
        <button
          className="btn delete_btn"
          onClick={() => removeTask(categoryId, id)}
        >
          <RiDeleteBinLine />
        </button>
      </div>
    </div>
  );
};

export default Task;
