import Header from "./components/header/header";
import Homepage from "./pages/Homepage/Homepage";
import Footer from "./components/footer/footer";
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Panier from "./pages/Panier/Panier";
import PagesCards from "./pages/Cards/PagesCards";
import data from './data/pc';
import Style from './App.module.scss'

const App = () => { const [numberPanier, setNumberPanier] = useState(0);
 

  const [panier, setPanier] = useState([]);

  const [filteredData, setFilteredData] = useState(data); // Initialise filteredData avec les données

  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className={Style.container}>
      <Header numberPanier={numberPanier} showMenu={showMenu} setShowMenu={setShowMenu}/>
      <div className={Style.mainContent}>
        <Routes>
          <Route path='/panier' element={<Panier
            panier={panier}
            setPanier={setPanier}
            setNumberPanier={setNumberPanier}
            numberPanier={numberPanier} />} />
          <Route path='/' element={<Homepage
            showMenu={showMenu} setShowMenu={setShowMenu}
            setNumberPanier={setNumberPanier} setPanier={setPanier}
            setFilteredData={setFilteredData} filteredData={filteredData} />} />
          <Route path='/cards/:id' element={<PagesCards
            filteredData={filteredData}
            setNumberPanier={setNumberPanier}
            setPanier={setPanier} />} />
        </Routes>
      </div>
      <Footer />
    </div >
  );
};

export default App;