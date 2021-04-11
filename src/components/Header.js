import { useContext, useState } from 'react';
import { MdAdd } from 'react-icons/md';
import { AppContext } from '../Context';

const Header = () => {
  const { addCategory } = useContext(AppContext);

  const [category, setCategory] = useState('');

  const clickHandler = () => {
    if (category) {
      addCategory({ id: Date.now(), title: category, tasks: [] });
      setCategory('');
    }
  };

  return (
    <header className="header">
      <div className="wrapper">
        <div className="new-category">
          <input
            type="text"
            name="category"
            placeholder="New category"
            className="new-category__input"
            value={category}
            onChange={e => setCategory(e.target.value)}
          />
          <button className="btn new-category__btn" onClick={clickHandler}>
            <MdAdd />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
