import React, { Suspense, useState, lazy, useEffect } from "react";
import "../style/style.scss";
import { Switch, Route, useLocation } from "react-router-dom";
import Header from "../components/Header/Header";
import HomePage from "../pages/Home/HomePage";
import Footer from "../components/Footer/Footer";

const ShopPage = lazy(() => import("../pages/Shop/ShopPage"));
// const AboutPage = lazy(() => import('../pages/About/AboutPage'))
const SinglePage = lazy(() =>
  import("../pages/Shop/ProductSinglePage/ProductSinglePage")
);

export default function AppRouter() {
  useEffect(() => {
    fetchAllData();
  }, []);

  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

  const [mainProducts, setMainProducts] = useState([]);
  const [headerItems, setHeaderItems] = useState([]);

  const fetchAllData = async () => {
    try {
      const data = await fetch("/products");
      const fetchedData = await data.json();
      const headerData = await fetch("/shopitems");
      const headerFetched = await headerData.json();
      setHeaderItems(headerFetched);
      setMainProducts(fetchedData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Header headerItems={headerItems} />
      <Suspense fallback={<h2>component is loading...</h2>}>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/shop">
            <ShopPage mainProducts={mainProducts} headerItems={headerItems} />
          </Route>
          <Route path="/product/:id">
            <SinglePage />
          </Route>
          {/* <Route path="/about">
            <AboutPage />
          </Route> */}
        </Switch>
      </Suspense>
      <Footer />
    </div>
  );
}
