import React from 'react';
import style from './style/SpinnerContainer.module.css';

const SpinnerContainer = () => {
  return (
    <div className={style.spinnerContainer_div_flex}>
      <div className={style.spinnerContainer_div}></div>
      <h3 className={style.spinnerContainer_div_h3}>Loading...</h3>
    </div>
  );
};
export default SpinnerContainer;
