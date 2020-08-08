import React from "react";
import "./headershopitem.scss";
import { useHistory } from "react-router-dom";

export default function HeaderShopItem({ item, scrolled }) {
  const history = useHistory();
  const category = item.category;

  const historyPush = () => {
    history.push(`/shop/?category=${category}`);
  };
  return (
    <div className="header_shop_item" onClick={historyPush}>
      <img src={item.icon} alt={item.title} width="100%" />
      <p
        className={
          !scrolled
            ? "font-red font-medium upper mt_3"
            : "font-whitesmoke font-medium upper mt_3"
        }
      >
        {item.title}
      </p>
    </div>
  );
}
