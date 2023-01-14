import style from './style/WelcomeForm.module.css';

// !! ARREGLAR ERROR DEL INPUT, AGREGARLE LÓGICA
const WelcomeForm = () => {
  return (
    <form>
      <h4>
        <b>Complete</b> <b className={style.from__h4__text}>to be able to </b>
        <b className={style.form__h4__enter}>enter</b>
      </h4>
      <div className={style.div_input}>
        <input type='text' />
        <label>Enter your name</label>
      </div>
      <div className={style.div_input}>
        <input type='text' />
        <label>Enter your last name</label>
      </div>
      <div className={style.flex}>
        <input type='checkbox' className={style.jeje} />
        <p>Are you sure you want to immerse yourself in the action?</p>
      </div>
      <button type='submit'>start</button>
    </form>
  );
};
export default WelcomeForm;
