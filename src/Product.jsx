import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";
//dispatch the informationlisten to the action to the reducer

function Product({ id, title, price, rating, image }) {
  const [{}, dispatch] = useStateValue();
  const addToBasket = () => {
    //ADD ITEM TO THE BASKET
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
        //key name is same the value name
      },
    });
  };
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>⭐</p>
            ))}
        </div>
      </div>

      <img src={image} alt="image" />
      <button onClick={addToBasket}>Add to Busket</button>
    </div>
  );
}

export default Product;
