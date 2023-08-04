import React from 'react';
import Style from './Panier.module.scss'

const Panier = ({ panier, setPanier, setNumberPanier }) => {
  const total = () => {
    let sum = 0;
    panier.forEach((product) => {
      sum += product.price;
    });
    return sum;
  };

  const handleDelete = (pcId) => {
    // Trouver l'index de la première occurrence du produit avec l'ID spécifié dans le tableau panier
    const productIndex = panier.findIndex((product) => product.id === pcId);

    if (productIndex !== -1) {
      // Créer une copie du tableau panier et supprimer le produit à l'index trouvé
      const updatedPanier = [...panier];
      updatedPanier.splice(productIndex, 1);

      // Mettre à jour l'état du panier avec le nouveau tableau mis à jour
      setPanier(updatedPanier);

      // Décrémenter le nombre total de produits dans le panier
      setNumberPanier((prevNumber) => prevNumber - 1);
    }
  };

  return (
    <div className={Style.panierMenue}>
      <div className={Style.panierContent}>
        <h1>Votre Panier</h1>
        {panier.map((product, index) => (
          <div key={`${product.id}-${index}`}>
            <p>
              {product.title} | {product.price}€   <button className="btn" onClick={() => handleDelete(product.id)}>Supprimer</button>
            </p>
          </div>
        ))}
        <p>Total : {total()}€</p>
      </div>
    </div>
  );
};

export default Panier;
