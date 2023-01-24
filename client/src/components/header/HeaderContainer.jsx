import style from './style/HeaderContainer.module.css';
import perfil from './assets/perfil.jpg';
import search from './assets/search.png';
import { useDispatch, useSelector } from 'react-redux';
import { filterBySearch } from '../../redux/actions';
import { Link } from 'react-router-dom';

const HeaderContainer = () => {
  const dispatch = useDispatch();
  const modalInfo = useSelector((state) => state);

  const inputChangeHandler = (event) => {
    const inputValue = event.target.value;
    dispatch(filterBySearch(inputValue));
  };

  const submitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <div className={style.headerContainer__div}>
      <div className={style.headerContainer__div__input}>
        <img
          src={search}
          alt='Search'
          className={style.headerContainer__img_input}
        />
        <form onSubmit={(event) => submitHandler(event)}>
          <input
            onChange={(event) => inputChangeHandler(event)}
            type='search'
            placeholder='Search...'
            className={style.headerContainer__input}
          />
          <Link to='/search'>
            <button type='submit' className={style.headerContainer__button}>
              Search
            </button>
          </Link>
        </form>
      </div>
      <div className={style.headerContainer__div_h5_img}>
        <h5 className={style.headerContainer__div_h5}>
          {modalInfo.infoLoginModal}
        </h5>
        <img
          src={perfil}
          className={style.headerContainer__div_img}
          alt={modalInfo.infoLoginModal}
        />
      </div>
    </div>
  );
};
export default HeaderContainer;
