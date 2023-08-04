import PcList from './Pc/PcList';
import OptionPc from './OptionPc/OptionPc';
import Search from './OptionPc/Search';
import data from '../../data/pc';
import style from './Homepage.module.scss'


const Homepage = ({setFilteredData, filteredData, showMenu, setShowMenu  }) => {
  // Les fonctions de filtrage pour appliquer les filtres

  const increasingPcFilters = () => {
    const filteredItems = data.filter((pc) => {
      return pc.price
    });
    setFilteredData(filteredItems);
  };

  const decreasePcFilters = () => {
    const filteredItems = data.filter((pc) => {
      return pc.price
    });
    filteredItems.sort((a, b) => b.price - a.price);
    setFilteredData(filteredItems);
  };

  const cheapPcFilters = () => {
    const filteredItems = data.filter((pc) => {
      return pc.price <= 1500;
    });
    setFilteredData(filteredItems);
  };

  const luxuryPcFilters = () => {
    const filteredItems = data.filter((pc) => {
      return pc.price >= 3000;
    });
    setFilteredData(filteredItems);
  };

  const setMaxPrice = (maxPrice) => {
    const filteredItems = data.filter((pc) => {
      return pc.price <= maxPrice;
    });
    setFilteredData(filteredItems);
  };

  const handleSearch = (query) => {
    const filteredItems = data.filter((pc) => {
      const { processor, ram, storage, graphicsCard } = pc.components;
      const lowerCaseQuery = query.toLowerCase();
      return (
        processor.toLowerCase().includes(lowerCaseQuery) ||
        ram.toLowerCase().includes(lowerCaseQuery) ||
        storage.toLowerCase().includes(lowerCaseQuery) ||
        graphicsCard.toLowerCase().includes(lowerCaseQuery)
      );
    });
    setFilteredData(filteredItems);
  };
  return (
    <>
      <div className={showMenu ? style.optionPcVisible : style.optionPc}>
        <h3 className={style.filtre}>Filtrer par :</h3>
        <OptionPc
          cheapPcFilters={cheapPcFilters}
          luxuryPcFilters={luxuryPcFilters}
          increasingPcFilters={increasingPcFilters}
          decreasePcFilters={decreasePcFilters}
          setMaxPrice={setMaxPrice}
        />
        <h3 className={style.filtre}>Composant :</h3>
        <Search handleSearch={handleSearch} />
      </div>
      <div className={style.titleWeb}>
        <h1>Votre site référence du PC Gamer</h1>
        <p>Découvrez sur notre site le pc gamer de vos rêves pour jouer dans les meilleures conditions à vos jeux vidéos préférés.
           Que ce soit un pc gamer sur mesure, haut de gamme, pas cher ou par marque.</p>
      </div>
      <PcList filteredData={filteredData}/>
    </>
  );
};

export default Homepage;