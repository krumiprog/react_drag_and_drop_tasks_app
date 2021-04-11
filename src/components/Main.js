import { useEffect, useState } from 'react';
import Category from './Category';

const Main = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    setTime(new Date().toLocaleDateString());
  }, []);

  return (
    <main class="main">
      <div className="wrapper">
        <h1 className="app-title">Lorem, ipsum dolor.</h1>
        <time datetime={time}>{time}</time>
        <div className="categories">
          <Category />
          <Category />
          <Category />
          <Category />
        </div>
      </div>
    </main>
  );
};

export default Main;
