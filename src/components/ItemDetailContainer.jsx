import React, { useEffect, useState } from 'react';
import { getProductById } from '../components/helpers/getData';
import ItemDetail from './ItemDetail';
import './styles/ItemDetailContainer.css';

const ItemDetailContainer = ({ id }) => {
  const [product, setProduct] = useState(null);

  useEffect((product) => {
   
    getProductById(Number(id), setProduct);
    console.log(product);
  }, [id]);

  return (
    <section className="item-detail-container">
      {product ? <ItemDetail item={product} /> : <p>Obteniendo producto...</p>}
    </section>
  );
};

export default ItemDetailContainer;