import { RiDeleteBinLine } from 'react-icons/ri';
import { MdAdd } from 'react-icons/md';
import { FaUserCircle } from 'react-icons/fa';

const Category = () => {
  return (
    <div className="category">
      <div className="category__header">
        <h3 className="category__title">Lorem, ipsum.</h3>
        <div className="category__amount">5</div>
        <button className="btn new-category__btn">
          <MdAdd />
        </button>
        <button className="btn delete_btn">
          <RiDeleteBinLine />
        </button>
      </div>
      <div className="cards">
        <div className="card">
          <div className="card__header">
            <time>{new Date().toLocaleDateString()}</time>
          </div>
          <div className="card__text">
            <h4>Lorem, ipsum.</h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae,
              animi.
            </p>
          </div>
          <div className="card__footer">
            <div className="avatar">
              <FaUserCircle />
            </div>
            <button className="btn delete_btn">
              <RiDeleteBinLine />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
