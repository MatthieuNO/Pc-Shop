import React from 'react';
import { useParams } from 'react-router-dom';
import Style from './PagesCards.module.scss';

const PagesCards = ({ filteredData, setNumberPanier, setPanier }) => {
  const { id } = useParams();

  // Trouver le produit correspondant à l'ID dans le tableau filteredData
  const selectedProduct = filteredData.find((pc) => pc.id === parseInt(id));
  // Vérifier si le produit est trouvé ou non
  if (!selectedProduct) {
    return <div>Produit non trouvé</div>;
  }

  // Fonction pour ajouter le produit au panier
  const handleAddToCart = () => {
    setNumberPanier((prevNumber) => prevNumber + 1);
    setPanier((prevPanier) => [
      ...prevPanier,
      { id: selectedProduct.id, title: selectedProduct.title, price: selectedProduct.price },
    ]);
  };

  // Afficher les informations du produit
  return (
    <div className={Style.contentPC}>
      <img src={selectedProduct.image} alt={selectedProduct.title} />
      <div className={Style.contentPCinfos}>
        <h1>{selectedProduct.title}</h1>
        <p>{selectedProduct.description}</p>
        <ul>
          <li>Carte Graphique : {selectedProduct.components.graphicsCard}</li>
          <li>Processeur : {selectedProduct.components.processor}</li>
          <li>RAM : {selectedProduct.components.ram}</li>
          <li>Stockage : {selectedProduct.components.storage}</li>
        </ul>
        <p>Prix : {selectedProduct.price}€ </p>
        <button className="btn" onClick={handleAddToCart}>Ajouter au panier</button>
      </div>
    </div>
  );
};

export default PagesCards;
