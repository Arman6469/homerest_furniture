import React from "react";
import "./shoppage.scss";
import { useLocation, useHistory } from "react-router-dom";
import qs from "query-string";

export default function ShopPage({ mainProducts }) {
  console.log(useHistory());
  const query = useLocation();
  const newquery = qs.parse(query.search.replace(/\s+/g, ""));
  const filterdProducts = mainProducts.filter(
    (product) => product.category === newquery.category
  );
  console.log(filterdProducts);

  return (
    <div>
      {filterdProducts ? filterdProducts.map(product => {
          return(
              <div key={product.id}>
                  <h1>{product.title}</h1>
                  <h1>{product.category}</h1>
                  <h1>{product.price}</h1>
              </div>
          )
      }): null}
    </div>
  );
}
