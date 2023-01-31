import { useState } from 'react';
import { useDispatch } from 'react-redux';
import style from './style/WelcomeForm.module.css';
import { changeModal, sendInfoLogin } from '../../redux/actions';
import { useHistory } from 'react-router-dom';
import imgLogo from '../navBar/assets/logo.png';

const WelcomeForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();

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
    if (nameValue === '') {
      setError({ ...error, name: '' });
    } else if (nameValue.length < 3) {
      setError({ ...error, name: 'Invalid name' });
    } else {
      setError({ ...error, name: null });
    }
    setForm({ ...form, name: nameValue });
  };

  const lastNameChangeHandler = (event) => {
    const lastNameValue = event.target.value;
    if (lastNameValue === '') {
      setError({ ...error, lastName: '' });
    } else if (lastNameValue.length < 4) {
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

  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(sendInfoLogin(form.name, form.lastName));
    dispatch(changeModal(false));
    localStorage.setItem('modals', JSON.stringify(false));
    history.push('/');
  };

  return (
    <form onSubmit={submitHandler} className={style.welcomeForm__form}>
      <h4 className={style.welcomeForm__h4}>
        <div className={style.welcomeForm_logo}>
          <img
            src={imgLogo}
            alt='Markish'
            className={style.welcomeForm_logoImg}
          />
          <h3>markish</h3>
        </div>
        <b>complete </b>
        <b className={style.welcomeForm__h4__text}>to be able to </b>
        <b className={style.welcomeForm__h4__enter}>enter</b>
      </h4>
      <div className={style.welcomeForm__div_input}>
        {error.name === '' ? (
          <p className={style.welcomeForm__p_clear}>
            your name must have at least 3 letters
          </p>
        ) : error.name === 'Invalid name' ? (
          <p className={style.welcomeForm__p_error}>{`You are missing ${
            3 - form.name.length
          } letters to make your name correct`}</p>
        ) : (
          <p className={style.welcomeForm__p_correct}>correct name</p>
        )}
        <input
          className={
            error.name === ''
              ? style.welcomeForm__input
              : error.name === null
              ? style.welcomeForm__input_validate
              : style.welcomeForm__input_error
          }
          type='text'
          onChange={nameChangeHandler}
        />
        {!form.name && (
          <label className={style.welcomeForm__label}>enter your name</label>
        )}
      </div>
      <div className={style.welcomeForm__div_input}>
        {error.lastName === '' ? (
          <p className={style.welcomeForm__p_clear}>
            your last name must have at least 4 letters
          </p>
        ) : error.lastName === 'Invalid last name' ? (
          <p className={style.welcomeForm__p_error}>{`You are missing ${
            4 - form.lastName.length
          } letters to make your last name correct`}</p>
        ) : (
          <p className={style.welcomeForm__p_correct}>correct last name</p>
        )}
        <input
          className={
            error.lastName === ''
              ? style.welcomeForm__input
              : error.lastName === null
              ? style.welcomeForm__input_validate
              : style.welcomeForm__input_error
          }
          type='text'
          onChange={lastNameChangeHandler}
        />
        {!form.lastName && (
          <label className={style.welcomeForm__label}>
            enter your last name
          </label>
        )}
      </div>
      <div className={style.welcomeForm__flex}>
        <input type='checkbox' onChange={checkBoxChangeHandler} />
        <p className={style.welcomeForm__p}>
          are you sure you want to immerse yourself in the action?
        </p>
      </div>
      <button
        type='submit'
        className={style.welcomeForm__button}
        disabled={
          error.name !== null ||
          error.lastName !== null ||
          error.checkBox !== null
        }
      >
        start
      </button>
    </form>
  );
};
export default WelcomeForm;
