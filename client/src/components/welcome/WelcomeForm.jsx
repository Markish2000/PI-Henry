import { useState } from 'react';
import style from './style/WelcomeForm.module.css';

const WelcomeForm = () => {
  const [form, setForm] = useState({
    name: '',
    lastName: '',
  });

  const [error, setError] = useState({
    name: '',
    lastName: '',
    checkBox: 'Invalid check',
  });

  const nameChangeHandler = (event) => {
    const nameValue = event.target.value;
    if (form.name.length < 3) {
      setError({ ...error, name: 'Invalid name' });
    } else {
      setError({ ...error, name: null });
    }
    setForm({ ...form, name: nameValue });
  };

  const lastNameChangeHandler = (event) => {
    const lastNameValue = event.target.value;
    if (form.lastName.length < 3) {
      setError({ ...error, lastName: 'Invalid last name' });
    } else {
      setError({ ...error, lastName: null });
    }
    setForm({ ...form, lastName: lastNameValue });
  };

  const checkBoxChangeHandler = (event) => {
    const checkBoxValue = event.target.checked;
    if (checkBoxValue === false) {
      setError({ ...error, checkBox: 'Invalid check' });
    } else {
      setError({ ...error, checkBox: null });
    }
  };

  return (
    <form className={style.welcomeForm__form}>
      <h4 className={style.welcomeForm__h4}>
        <b>Complete</b>{' '}
        <b className={style.welcomeForm__h4__text}>to be able to </b>
        <b className={style.welcomeForm__h4__enter}>enter</b>
      </h4>
      <div className={style.welcomeForm__div_input}>
        <input
          className={style.welcomeForm__input}
          type='text'
          onChange={nameChangeHandler}
        />
        <label className={style.welcomeForm__label}>Enter your name</label>
      </div>
      <div className={style.div_input}>
        <input
          className={style.welcomeForm__input}
          type='text'
          onChange={lastNameChangeHandler}
        />
        <label className={style.welcomeForm__label}>Enter your last name</label>
      </div>
      <div className={style.welcomeForm__flex}>
        <input
          className={style.welcomeForm__input}
          type='checkbox'
          onChange={checkBoxChangeHandler}
        />
        <p className={style.welcomeForm__p}>
          Are you sure you want to immerse yourself in the action?
        </p>
      </div>
      <button type='submit' className={style.welcomeForm__button}>
        start
      </button>
    </form>
  );
};
export default WelcomeForm;
