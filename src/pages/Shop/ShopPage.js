import React from "react";
import "./shoppage.scss";
import { useLocation } from "react-router-dom";
import qs from "query-string";
import ProductCard from "../../components/ProductCard/ProductCard";
import SubMenu from "../../components/SubMenu/SubMenu";

export default function ShopPage({ mainProducts, headerShop }) {
  const query = useLocation();
  const newquery = qs.parse(query.search.replace(/\s+/g, ""));
  const filterdProducts = mainProducts.filter((product) =>
    product.category === newquery.category && newquery.type
      ? product.type === newquery.type
      : product.category === newquery.category
  );
  console.log(newquery);

  return (
    <div className="shop">
      <SubMenu headerShop={headerShop} />
      <div className="shop_products">
        {filterdProducts
          ? filterdProducts.map((product) => {
              return <ProductCard key={product.id} product={product} />;
            })
          : null}
      </div>
    </div>
  );
}
