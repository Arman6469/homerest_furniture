import React, { useState } from "react";
import "./shoppage.scss";
import { useLocation } from "react-router-dom";
import qs from "query-string";
import ProductCard from "../../components/ProductCard/ProductCard";
import SubMenu from "../../components/SubMenu/SubMenu";
import { useEffect } from "react";

export default function ShopPage({ mainProducts, headerItems }) {
  const [products, setProducts] = useState([]);
  const query = useLocation();
  const newquery = qs.parse(query.search.replace(/\s+/g, ""));
  

  const filtering = () => {
    if (!Object.entries(newquery).length) {
      setProducts(mainProducts);
    } else {
      const filteredProducts = mainProducts.filter((product) =>
        product.category === newquery.category && newquery.type
          ? product.type === newquery.type
          : product.category === newquery.category
      );
      setProducts(filteredProducts);
    }
  };
  useEffect(() => {
    filtering();
  }, [query]);
 
  return (
    <div className="shop">
      <SubMenu headerItems={headerItems} />
      <div className="shop_products">
        {products
          ? products.map((product) => {
              return <ProductCard key={product._id} product={product} />;
            })
          : null}
      </div>
    </div>
  );
}
