import style from './style/HeaderContainer.module.css';
import perfil from './assets/perfil.jpg';
import search from './assets/search.png';
import { useDispatch } from 'react-redux';
import { filterBySearch, filterBySearchValue } from '../../redux/actions';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const HeaderContainer = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [inputSearch, setInputSearch] = useState({
    search: '',
  });
  const infoUser = localStorage.getItem('users');
  const infoUserChange = infoUser.replace(/"/g, '');
  const inputChangeHandler = (event) => {
    const inputValue = event.target.value;
    setInputSearch({ ...inputSearch, search: inputValue });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(filterBySearch(inputSearch.search));
    dispatch(filterBySearchValue(inputSearch.search));
    history.push('/search');
  };

  return (
    <div className={style.headerContainer__div}>
      <div className={style.headerContainer__div__input}>
        <img
          loading='lazy'
          src={search}
          alt='search'
          className={style.headerContainer__img_input}
        />
        <form onSubmit={(event) => submitHandler(event)}>
          <input
            onChange={(event) => inputChangeHandler(event)}
            type='text'
            placeholder='search...'
            className={style.headerContainer__input}
          />
          <button type='submit' className={style.headerContainer__button}>
            search
          </button>
        </form>
      </div>
      <div className={style.headerContainer__div_h5_img}>
        <h5 className={style.headerContainer__div_h5}>{infoUserChange}</h5>
        <img
          loading='lazy'
          src={perfil}
          className={style.headerContainer__div_img}
          alt={infoUserChange}
        />
      </div>
    </div>
  );
};
export default HeaderContainer;
