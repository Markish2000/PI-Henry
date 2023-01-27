import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from './style/WelcomeForm.module.css';
import { changeModal, sendInfoLogin } from '../../redux/actions';
import { useHistory } from 'react-router-dom';

const WelcomeForm = () => {
  const modalBoolean = useSelector((state) => state);
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
    console.log(form.name);
    if (form.name.length < 2) {
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

  const submitHandler = (event) => {
    event.preventDefault();
    history.push('/');
    dispatch(changeModal(!modalBoolean.modal));
    dispatch(sendInfoLogin(form.name, form.lastName));
  };

  return (
    <form onSubmit={submitHandler} className={style.welcomeForm__form}>
      <h4 className={style.welcomeForm__h4}>
        <b>complete </b>
        <b className={style.welcomeForm__h4__text}>to be able to </b>
        <b className={style.welcomeForm__h4__enter}>enter</b>
      </h4>
      <div className={style.welcomeForm__div_input}>
        <input
          className={
            error.name === ''
              ? style.welcomeForm__input
              : error.name === null
              ? style.welcomeForm__input_validate
              : style.welcomeForm__input_error
          }
          type='text'
          onChange={(event) => nameChangeHandler(event)}
        />
        {!form.name && (
          <label className={style.welcomeForm__label}>enter your name</label>
        )}
      </div>
      <div className={style.div_input}>
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
          <label className={style.welcomeForm__label_lastName}>
            enter your last name
          </label>
        )}
      </div>
      <div className={style.welcomeForm__flex}>
        <input
          className={style.welcomeForm__input}
          type='checkbox'
          onChange={checkBoxChangeHandler}
        />
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
