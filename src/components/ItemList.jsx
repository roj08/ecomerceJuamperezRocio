import React, { useEffect, useState } from 'react';
import Item from './Item';
import './styles/ItemList.css';
import {getAllProductsFromDB} from '../components/helpers/getData'

const ItemList = () => {
  
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProductsFromDB(setProducts);
  }, []);

  return (
    <div className="product-list-container">
      {
        products.length ? (
          <>
            {
              products.map((product) => {
                return (
                  <div key={product.id}>
                    <Item
                      name={product.name}
                      image={product.image}
                      price={product.price}
                      stock={product.stock}
                      id={product.id}
                    />
                  </div>
                );
              })
            }
          </>
        ) : (
          <p>Cargando productos...</p>
        )
      }
    </div>
  );
};

export default ItemList;