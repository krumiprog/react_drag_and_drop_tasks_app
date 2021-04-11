import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../Context';
import Category from './Category';

const Main = () => {
  const { state } = useContext(AppContext);

  const [time, setTime] = useState('');

  useEffect(() => {
    setTime(new Date().toLocaleDateString());
  }, []);

  return (
    <main className="main">
      <div className="wrapper">
        <h1 className="app-title">Drag and Drop Task App</h1>
        <time dateTime={time}>{time}</time>
        <div className="categories">
          {state.map(category => (
            <Category key={category.id} {...category} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Main;
