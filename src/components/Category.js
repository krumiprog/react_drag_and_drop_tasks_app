import { useContext, useState } from 'react';
import { RiDeleteBinLine } from 'react-icons/ri';
import { MdAdd } from 'react-icons/md';
import { MdClose } from 'react-icons/md';
// import { FaUserCircle } from 'react-icons/fa';
import { AppContext } from '../Context';
import Task from './Task';

const Category = ({ id, title, tasks }) => {
  const { removeCategory, addTask } = useContext(AppContext);

  const [isVisible, setIsVisible] = useState(false);
  const [taskTitle, setTaskTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    addTask(id, { id: Date.now(), title: taskTitle, description });
  };

  return (
    <div className="category">
      <div className="category__header">
        <h3 className="category__title">{title}</h3>
        <div className="category__amount">{tasks.length}</div>
        <button
          className="btn new-category__btn"
          onClick={() => setIsVisible(!isVisible)}
        >
          {isVisible ? <MdClose /> : <MdAdd />}
        </button>
        <button className="btn delete_btn" onClick={() => removeCategory(id)}>
          <RiDeleteBinLine />
        </button>
      </div>
      {isVisible && (
        <div className="card">
          <form className="card__form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="title"
              placeholder="category title"
              value={taskTitle}
              onChange={e => setTaskTitle(e.target.value)}
            />
            <input
              type="text"
              name="description"
              placeholder="category description"
              value={description}
              onChange={e => setDescription(e.target.value)}
            />
            <button type="submit" className="btn_form">
              Create
            </button>
          </form>
        </div>
      )}
      <div className="cards">
        {tasks.map(task => (
          <Task key={task.id} categoryId={id} {...task} />
        ))}
      </div>
    </div>
  );
};

export default Category;
