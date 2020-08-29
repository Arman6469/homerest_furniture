import React, { useState, useMemo, useEffect } from "react";
import "./shoppage.scss";
import { useLocation } from "react-router-dom";
import qs from "query-string";
import ProductCard from "../../components/ProductCard/ProductCard";
import SubMenu from "../../components/SubMenu/SubMenu";
import { connect } from "react-redux";

function ShopPage(props) {
  const [products, setProducts] = useState([]);
  const query = useLocation();
  const newquery = useMemo(() => qs.parse(query.search.replace(/\s+/g, "")), [
    query,
  ]);


  useEffect(() => {
    if (props.data) {
      if (!Object.entries(newquery).length) {
        setProducts(props.data);
      } else {
        const filteredProducts = props.data.filter(
          (product) =>
            (!newquery.category || product.category === newquery.category) &&
            (!newquery.type || product.type === newquery.type)
        );
        setProducts(filteredProducts);
      }
    }
  }, [newquery, props.data]);
  return (
    <div className="shop pt-7">
      <SubMenu
        headerItems={props.headerItems}
        current={props.current}
        currentAll={props.currentAll}
        setCurrentAll={props.setCurrentAll}
        setCurrent={props.setCurrent}
      />
      <div className="shop_products">
        {products.length
          ? products.map((product) => {
              return <ProductCard key={product._id} product={product} />;
            })
          : null}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    data: state.fetchData.products,
  };
};

export default connect(mapStateToProps)(ShopPage);
