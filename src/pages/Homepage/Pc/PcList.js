import React from 'react';
import data from '../../../data/pc';
import style from './PcList.module.scss';

const PcList = () => {
  return (
    <div className={style.contentCards}>
    <div className={style.menue}>
      <div className={style.cardsGrid}>
        {data.map((pc) => (
            <div className={style.cards} key={pc.title}>
            <div className={style.photoCards}>
              <img className={style.img} src={pc.image} alt={pc.title} />
            </div>
            <div className={style.infosCards}>
              <h2>{pc.title}</h2>
              <h2>{pc.price} <i className="fa-solid fa-euro-sign"></i></h2>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default PcList;
