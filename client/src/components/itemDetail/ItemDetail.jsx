import React, { useEffect } from 'react';
import prueba from './prueba.jpg';
import style from './style/ItemDetail.module.css';
import { getDetail } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ItemDetailButton from './ItemDetailButton';

const ItemDetail = () => {
  const infoDetail = useSelector((state) => state.detail);
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch(getDetail(params.id));
  }, []);

  return (
    <div>
      {infoDetail.map((element, index) => (
        <div>
          <h1>{element.name}</h1>
          <div>
            {element.platform.map((e) => (
              <li>{e}</li>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemDetail;
