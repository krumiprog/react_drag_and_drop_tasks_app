import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../Context';
import Category from './Category';

const Main = () => {
  const { state, dragDropTask, dropOnCategory } = useContext(AppContext);

  const [time, setTime] = useState('');

  const [currentCategory, setCurrentCategory] = useState(0);
  const [currentTask, setCurrentTask] = useState(0);

  useEffect(() => {
    setTime(new Date().toLocaleDateString());
  }, []);

  const handleDragOver = e => {
    e.preventDefault();
  };

  const handleDragStart = (e, category, task) => {
    setCurrentCategory(category);
    setCurrentTask(task);
  };

  const handleDrop = (e, categoryId, taskId) => {
    e.preventDefault();
    e.stopPropagation();
    dragDropTask(categoryId, taskId, currentCategory, currentTask);
  };

  const handleDropOnBoard = (e, categoryId) => {
    dropOnCategory(categoryId, currentCategory, currentTask);
  };

  return (
    <main className="main">
      <div className="wrapper">
        <h1 className="app-title">Drag and Drop Task App</h1>
        <time dateTime={time}>{time}</time>
        <div className="categories">
          {state.map(category => (
            <Category
              key={category.id}
              {...category}
              handleDragOver={handleDragOver}
              handleDragStart={handleDragStart}
              handleDrop={handleDrop}
              handleDropOnBoard={handleDropOnBoard}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Main;
