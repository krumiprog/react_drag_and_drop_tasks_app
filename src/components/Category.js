import { useContext, useState } from 'react';
import { RiDeleteBinLine } from 'react-icons/ri';
import { MdAdd } from 'react-icons/md';
import { MdClose } from 'react-icons/md';
import { AppContext } from '../Context';
import Task from './Task';

const Category = props => {
  const { removeCategory, addTask } = useContext(AppContext);

  const [isVisible, setIsVisible] = useState(false);
  const [taskTitle, setTaskTitle] = useState('');
  const [description, setDescription] = useState('');

  const { id, title, tasks, handleDragOver, handleDropOnBoard } = props;

  const handleSubmit = e => {
    e.preventDefault();

    if (!taskTitle || !description) {
      return;
    }

    addTask(id, { id: Date.now(), title: taskTitle, description });
    setIsVisible(false);
    setTaskTitle('');
    setDescription('');
  };

  return (
    <div
      className="category"
      onDragOver={e => handleDragOver(e)}
      onDrop={e => handleDropOnBoard(e, id)}
    >
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
              required
              value={taskTitle}
              onChange={e => setTaskTitle(e.target.value)}
            />
            <input
              type="text"
              name="description"
              placeholder="category description"
              required
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
          <Task key={task.id} categoryId={id} task={task} {...props} />
        ))}
      </div>
    </div>
  );
};

export default Category;
