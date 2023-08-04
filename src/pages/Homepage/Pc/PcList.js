import React from 'react';
import style from './PcList.module.scss';
import { Link } from 'react-router-dom';


const PcList = ({ filteredData }) => {


  return (
    <div className={style.contentCards}>
      <div className={style.menue}>
        <div className={style.cardsGrid}>
          {filteredData.length > 0 ? (
            filteredData.map((pc) => (
              <Link to={`/cards/${pc.id}`} className={style.cards} key={pc.id}>
                <div className={style.photoCards}>
                  <img className={style.img} src={pc.image} alt={pc.title} />
                </div>
                <div className={style.infosCards}>
                  <h2>{pc.title}</h2>
                  <ul>
                    <li>{pc.components.graphicsCard}</li>
                    <li>{pc.components.processor}</li>
                    <li>{pc.components.ram}</li>
                    <li>{pc.components.storage}</li>
                  </ul>
                  <h2>
                    {pc.price}.00 <i className="fa-solid fa-euro-sign"></i>
                  </h2>
                  
                </div>
              </Link>
            ))
          ) : (
            <div style={style.noResults}>
              <div className={style.noResultsMessage}>Aucun Composant trouvé ...</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PcList;