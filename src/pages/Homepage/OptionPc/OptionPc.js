import React, { useState } from 'react';
import style from './Option.module.scss'

const OptionPc = ({ cheapPcFilters, decreasePcFilters, luxuryPcFilters, increasingPcFilters, setMaxPrice }) => {
  const [priceRange, setPriceRange] = useState(6000); // Valeur initiale du range

  const handlePriceChange = (event) => {
    const newPriceRange = parseInt(event.target.value, 10);
    setPriceRange(newPriceRange);
    setMaxPrice(newPriceRange); // Filtrer automatiquement les PC lorsque la valeur du range change
  };

  const handleIncreasingPcFilters = () => {
    increasingPcFilters();
  };

  const handleDecreasePcFilters = () => {
    decreasePcFilters();
  };

  const handleCheapPcFilters = () => {
    cheapPcFilters();
  };

  const handleLuxuryPcFilters = () => {
    luxuryPcFilters();
  };

  return (
    <div className={style.OptionPcContent}>
      {/* Ajoutez les boutons ou les contrôles pour activer les autres filtres */}
      <button className="btn" onClick={handleIncreasingPcFilters}>Prix Croissant</button>
      <button className="btn" onClick={handleDecreasePcFilters}>Prix Décroissant</button>
      <button className="btn" onClick={handleCheapPcFilters}>Prix Abordable</button>
      <button className="btn" onClick={handleLuxuryPcFilters}>Prix Premium</button>
      <h3>Prix :</h3>
      <input
        type="range"
        min="799" // Valeur minimale du range (selon vos besoins)
        max="6000" // Valeur maximale du range (selon vos besoins)
        value={priceRange}
        onChange={handlePriceChange}
      />
    </div>
  );
};

export default OptionPc;

