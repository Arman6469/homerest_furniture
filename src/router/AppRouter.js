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
    title: "chair",
    images: [rosesofa, rosesofa, rosesofa, rosesofa, rosesofa],
    category: "kitchen",
    sale: 0,
    price: 299,
    type: "chair",
    description:
      "piti vor lini piti vor lini piti vor lini piti vor lini piti vor lini",
    id: 0,
  },
  {
    title: "table",
    images: [rosesofa, rosesofa, rosesofa, rosesofa, rosesofa],
    category: "kitchen",
    sale: 0,
    price: 499,
    type: "table",
    description:
      "piti vor lini piti vor lini piti vor lini piti vor lini piti vor lini",
    id: 1,
  },
  {
    title: "table",
    images: [rosesofa, rosesofa, rosesofa, rosesofa, rosesofa],
    category: "kitchen",
    sale: 20,
    price: 359,
    type: "table",
    description:
      "piti vor lini piti vor lini piti vor lini piti vor lini piti vor lini",
    id: 2,
  },
  {
    title: "chair",
    images: [rosesofa, rosesofa, rosesofa, rosesofa, rosesofa],
    category: "kitchen",
    sale: 0,
    price: 299,
    type: "chair",
    description:
      "piti vor lini piti vor lini piti vor lini piti vor lini piti vor lini",
    id: 3,
  },
  {
    title: "table",
    images: [rosesofa, rosesofa, rosesofa, rosesofa, rosesofa],
    category: "kitchen",
    sale: 0,
    price: 499,
    type: "table",
    description:
      "piti vor lini piti vor lini piti vor lini piti vor lini piti vor lini",
    id: 4,
  },
  {
    title: "table",
    images: [rosesofa, rosesofa, rosesofa, rosesofa, rosesofa],
    category: "kitchen",
    sale: 20,
    price: 359,
    type: "table",
    description:
      "piti vor lini piti vor lini piti vor lini piti vor lini piti vor lini",
    id: 5,
  },
  {
    title: "chair",
    images: [rosesofa, rosesofa, rosesofa, rosesofa, rosesofa],
    category: "kitchen",
    sale: 0,
    price: 299,
    type: "chair",
    description:
      "piti vor lini piti vor lini piti vor lini piti vor lini piti vor lini",
    id: 6,
  },
  {
    title: "table",
    images: [rosesofa, rosesofa, rosesofa, rosesofa, rosesofa],
    category: "kitchen",
    sale: 0,
    price: 499,
    type: "table",
    description:
      "piti vor lini piti vor lini piti vor lini piti vor lini piti vor lini",
    id: 7,
  },
  // {
  //   title: "table",
  //   images: [rosesofa, rosesofa, rosesofa, rosesofa, rosesofa],
  //   category: "kitchen",
  //   sale: 20,
  //   price: 359,
  //   type: "table",
  //   description:
  //     "piti vor lini piti vor lini piti vor lini piti vor lini piti vor lini",
  //   id: 8,
  // },
  {
    title: "chair",
    images: [rosesofa, rosesofa, rosesofa, rosesofa, rosesofa],
    category: "livingroom",
    sale: 0,
    price: 299,
    type: "chair",
    description:
      "piti vor lini piti vor lini piti vor lini piti vor lini piti vor lini",
    id: 9,
  },
  {
    title: "table",
    images: [rosesofa, rosesofa, rosesofa, rosesofa, rosesofa],
    category: "livingroom",
    sale: 0,
    price: 499,
    type: "table",
    description:
      "piti vor lini piti vor lini piti vor lini piti vor lini piti vor lini",
    id: 10,
  },
  {
    title: "table",
    images: [rosesofa, rosesofa, rosesofa, rosesofa, rosesofa],
    category: "livingroom",
    sale: 20,
    price: 359,
    type: "table",
    description:
      "piti vor lini piti vor lini piti vor lini piti vor lini piti vor lini",
    id: 11,
  },
  {
    title: "chair",
    images: [rosesofa, rosesofa, rosesofa, rosesofa, rosesofa],
    category: "livingroom",
    sale: 0,
    price: 299,
    type: "chair",
    description:
      "piti vor lini piti vor lini piti vor lini piti vor lini piti vor lini",
    id: 12,
  },
  {
    title: "table",
    images: [rosesofa, rosesofa, rosesofa, rosesofa, rosesofa],
    category: "livingroom",
    sale: 0,
    price: 499,
    type: "table",
    description:
      "piti vor lini piti vor lini piti vor lini piti vor lini piti vor lini",
    id: 13,
  },
  {
    title: "table",
    images: [rosesofa, rosesofa, rosesofa, rosesofa, rosesofa],
    category: "livingroom",
    sale: 20,
    price: 359,
    type: "table",
    description:
      "piti vor lini piti vor lini piti vor lini piti vor lini piti vor lini",
    id: 14,
  },
  {
    title: "chair",
    images: [rosesofa, rosesofa, rosesofa, rosesofa, rosesofa],
    category: "livingroom",
    sale: 0,
    price: 299,
    type: "chair",
    description:
      "piti vor lini piti vor lini piti vor lini piti vor lini piti vor lini",
    id: 15,
  },
  {
    title: "table",
    images: [rosesofa, rosesofa, rosesofa, rosesofa, rosesofa],
    category: "livingroom",
    sale: 0,
    price: 499,
    type: "table",
    description:
      "piti vor lini piti vor lini piti vor lini piti vor lini piti vor lini",
    id: 16,
  },
  {
    title: "table",
    images: [rosesofa, rosesofa, rosesofa, rosesofa, rosesofa],
    category: "livingroom",
    sale: 20,
    price: 359,
    type: "table",
    description:
      "piti vor lini piti vor lini piti vor lini piti vor lini piti vor lini",
    id: 17,
  },
];

const headerShop = [
  {
    title: "kitchen",
    icon: sofa,
    category: "kitchen",
    all: "all",
    products: [
      { type: "chair", id: 0 },
      { type: "table", id: 1 },
      { type: "placemat", id: 2 },
    ],
    id: 0,
  },
  {
    title: "living room",
    icon: sofa,
    category: "livingroom",
    all: "all",
    products: [
      { type: "sofa", id: 3 },
      { type: "divan", id: 4 },
      { type: "chair", id: 5 },
      { type: "table", id: 6 },
    ],
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
            <ShopPage mainProducts={mainProducts} headerShop={headerShop} />
          </Route>
        </Switch>
      </Suspense>
      <Footer />
    </div>
  );
}
