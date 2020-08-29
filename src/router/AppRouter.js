import React, { Suspense, useState, lazy, useEffect } from "react";
import "../style/style.scss";
import { Switch, Route, useLocation } from "react-router-dom";
import Header from "../components/Header/Header";
import HomePage from "../pages/Home/HomePage";
import Footer from "../components/Footer/Footer";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { requestApiData } from "../redux/actions";
import {useLocalStorage} from '../hooks/useLocalStorage'

const ShopPage = lazy(() => import("../pages/Shop/ShopPage"));
// const AboutPage = lazy(() => import('../pages/About/AboutPage'))
const SinglePage = lazy(() =>
  import("../pages/Shop/ProductSinglePage/ProductSinglePage")
);
const CartPage = lazy(() => import("../pages/Cart/CartPage"));

function AppRouter(props) {
  const {setItem,getItem} = useLocalStorage()
  const [current, setCurrent] = useState("");
  const [currentAll, setCurrentAll] = useState("");
  const [cartItemsID, setCartItemsID] = useState(getItem("cartItems") || {});
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    props.requestApiData();
  }, [location]);

  return (
    <div>
      <Header
        headerItems={props.headerItems}
        setCurrent={setCurrent}
        setCurrentAll={setCurrentAll}
        cartItemsID={cartItemsID}
      />
      <Suspense fallback={<h2>component is loading...</h2>}>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/shop">
            <ShopPage
              headerItems={props.headerItems}
              current={current}
              currentAll={currentAll}
              setCurrentAll={setCurrentAll}
              setCurrent={setCurrent}
            />
          </Route>
          <Route path="/product/:id">
            <SinglePage
              cartItemsID={cartItemsID}
              setCartItemsID={setCartItemsID}
            />
          </Route>
          {/* <Route path="/about">
            <AboutPage />
          </Route> */}
          <Route path="/mycart">
            <CartPage cartItemsID={cartItemsID} setCartItemsID={setCartItemsID} />
          </Route>
        </Switch>
      </Suspense>
      <Footer />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    products: state.fetchData.products,
    headerItems: state.fetchData.headerItems,
  };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ requestApiData }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(AppRouter);
