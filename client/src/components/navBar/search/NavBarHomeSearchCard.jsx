import React from 'react';
import prueba from '../../home/bestgames/assets/prueba.jpg';
import style from './style/NavBarHomeSearchCard.module.css';

const NavBarHomeSearchCard = ({ image, name }) => {
  return (
    <div className={style.prueba2}>
      <img src={prueba} alt='prop.name' width='120em' height='100%' />
      <h3>Hogwarts Legacy</h3>
    </div>
  );
};
export default NavBarHomeSearchCard;
