import { useState } from 'react';
import { MdAdd } from 'react-icons/md';

const Header = () => {
  const [category, setCategory] = useState('');

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
          <button className="btn new-category__btn">
            <MdAdd />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
