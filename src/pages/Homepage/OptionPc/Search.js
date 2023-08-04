import style from './Search.module.scss'
import React, { useState } from 'react';

const Search = ({ handleSearch }) => {
// État local pour stocker la valeur de l'input de recherche
  const [searchQuery, setSearchQuery] = useState('');

  // Fonction appelée à chaque changement dans l'input de recherche
  const handleInputChange = (event) => {
    const query = event.target.value;
     // Met à jour l'état local avec la nouvelle valeur
    setSearchQuery(query);
    handleSearch(query);
  };

  return (
    <div>
      <input className={style.form} type="search" value={searchQuery} onChange={handleInputChange} />
    </div>
  );
};

export default Search;
