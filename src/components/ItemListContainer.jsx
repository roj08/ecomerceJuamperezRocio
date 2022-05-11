import './styles/ItemListContainer.css';
import ItemList from './ItemList';
import './styles/ItemList.css';

const ItemListContainer = () => {
    
    return (
      <section className="title">
        <div className="title-container">
          <article className="title-container-text">
            <h1>Cositas Bonitas</h1>
            <p>
              ¡Los mejores regalos los podes encontrar acá!
              También podes contactarnos para pedirnos algo personalizado
            </p>
          </article>
        </div>
        <ItemList />
      </section>
    );
  };
  
  export default ItemListContainer;