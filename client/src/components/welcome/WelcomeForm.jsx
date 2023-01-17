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
    console.log(checkBoxValue);
  };

  return (
    <form>
      <h4>
        <b>Complete</b> <b className={style.from__h4__text}>to be able to </b>
        <b className={style.form__h4__enter}>enter</b>
      </h4>
      <div className={style.div_input}>
        <input type='text' onChange={nameChangeHandler} />
        <label>Enter your name</label>
      </div>
      <div className={style.div_input}>
        <input type='text' onChange={lastNameChangeHandler} />
        <label>Enter your last name</label>
      </div>
      <div className={style.welcomeForm__flex}>
        <input type='checkbox' onChange={checkBoxChangeHandler} />
        <p>Are you sure you want to immerse yourself in the action?</p>
      </div>
      <button type='submit'>start</button>
    </form>
  );
};
export default WelcomeForm;
