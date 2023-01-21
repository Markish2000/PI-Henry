import React from 'react';
import style from './style/NavBarHomeSearch.module.css';
import { filterBySearch } from '../../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import NavBarHomeSearchCard from './NavBarHomeSearchCard';
import { Link } from 'react-router-dom';

const NavBarHomeSearch = () => {
  const dispatch = useDispatch();
  const infoSearch = useSelector((state) => state);

  const inputChangeHandler = (event) => {
    const inputValue = event.target.value;
    dispatch(filterBySearch(inputValue));
  };

  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <div>
        <form onSubmit={(event) => submitHandler(event)}>
          <input
            onChange={(event) => inputChangeHandler(event)}
            type='search'
            placeholder='Search...'
            className={style.headerContainer__input}
          />
          <Link to='/search'>
            <button type='submit'>X</button>
          </Link>
        </form>
      </div>
      <div className={style.prueba1}>
        {infoSearch.filterBySearch.map((element, index) => {
          <div key={index}>
            <NavBarHomeSearchCard image={element.image} name={element.name} />
          </div>;
        })}
      </div>
    </div>
  );
};
export default NavBarHomeSearch;
