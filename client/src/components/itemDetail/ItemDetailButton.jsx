import style from './style/ItemDetailButton.module.css';

const ItemDetailButton = ({ genres }) => {
  return (
    <div>
      <button className={style.itemDetailButton__div_info_button}>
        {genres}
      </button>
    </div>
  );
};
export default ItemDetailButton;
