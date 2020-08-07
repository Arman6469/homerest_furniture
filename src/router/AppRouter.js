import React, { Suspense, lazy } from "react";
import "../style/style.scss";
import { Switch, Route } from "react-router-dom";
import Header from "../components/Header/Header";
import HomePage from "../pages/Home/HomePage";
import rosesofa from "../assets/rosesofa.JPG";
import sofa from "../assets/sofa.png";
import Footer from "../components/Footer/Footer";

const ShopPage = lazy(() => import("../pages/Shop/ShopPage"));

const mainProducts = [
  {
    title: "sofa",
    images: [rosesofa, rosesofa, rosesofa, rosesofa, rosesofa],
    category: "kitchen",
    sale: 0,
    collection: "kitchen",
    description:
      "piti vor lini piti vor lini piti vor lini piti vor lini piti vor lini",
    id: 0,
  },
  {
    title: "sofa",
    images: [rosesofa, rosesofa, rosesofa, rosesofa, rosesofa],
    category: "kitchen",
    sale: 0,
    collection: "kitchen",
    description:
      "piti vor lini piti vor lini piti vor lini piti vor lini piti vor lini",
    id: 1,
  },
];

const headerShop = [
  {
    title: "kitchen",
    icon: sofa,
    category: "sofa",
    id: 0,
  },
  {
    title: "living room",
    icon: sofa,
    category: "sofa",
    id: 1,
  },
];

export default function AppRouter() {
  return (
    <div>
      <Header headerShop={headerShop} />
      <Suspense fallback={<h2>component is loading...</h2>}>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/shop">
            <ShopPage mainProducts={mainProducts} />
          </Route>
        </Switch>
      </Suspense>
      <Footer />
    </div>
  );
}
