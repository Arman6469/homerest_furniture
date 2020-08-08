import React, { useState, useEffect } from "react";
import "./productcard.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

export default function ProductCard(props) {
  const [newprice, setNewPrice] = useState(0);
  useEffect(() => {
    if (props.product.sale !== 0) {
      setNewPrice(
        Math.ceil(
          props.product.price - (props.product.price * props.product.sale) / 100
        )
      );
    }
  }, []);

  return (
    <div className="product_card">
      <img src={props.product.images[0]} alt={props.product.id} width="100%" />
      <h2 className="product_card_title font-red font-large upper ">
        {props.product.title}
      </h2>
      <div className="sale_parent font-medium">
        {props.product.sale !== 0 ? (
          <div className="product_card_sale_lent font-white font-medium upper">
            sale {props.product.sale}%
          </div>
        ) : null}
      </div>
      <p className="product_card_price font-red">
        <span className={props.product.sale === 0 ? null : "underline"}>
          {props.product.price}$
        </span>{" "}
        {newprice !== 0 ? newprice + "$" : null}
      </p>
      <div className="product_card_cart">
        <FontAwesomeIcon icon={faShoppingCart} className="shopping_cart_icon" />
      </div>
    </div>
  );
}
