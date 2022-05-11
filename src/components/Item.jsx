import ItemCount from './ItemCount.jsx';
import swal from 'sweetalert';
import './styles/Item.css';

const Item = ({ name, image, price, id, stock }) => {
  const onAdd = (qty) => {
    swal({
        title: "Completado",
        text: "Agregaste " + qty + " productos",
        icon: "success",
      });
  };

  return (
    <article className="product-card">
      <img className="product-card__image" src={image} alt="" />

      <h3 className="product-card__name">{name}</h3>
      <span className="product-card__name">${price}</span>

      <ItemCount stock={stock} onAdd={onAdd} initial={1} />
    </article>
  );
};

export default Item;