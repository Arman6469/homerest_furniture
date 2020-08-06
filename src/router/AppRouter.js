import React from "react";
import "../style/style.scss";
import { Switch, Route } from "react-router-dom";
import Header from "../components/Header/Header";
import HomePage from "../pages/Home/HomePage";
import rosesofa from "../assets/rosesofa.JPG";
import sofa from "../assets/sofa.png";
import Footer from "../components/Footer/Footer";

const mainProducts = [
  {
    title: "sofa",
    images: [rosesofa, rosesofa, rosesofa, rosesofa, rosesofa],
    category: "sofa",
    sale: 0,
    collection: "livingroom",
    description:
      "piti vor lini piti vor lini piti vor lini piti vor lini piti vor lini",
    id: 0,
  },
  {
    title: "sofa",
    images: [rosesofa, rosesofa, rosesofa, rosesofa, rosesofa],
    category: "sofa",
    sale: 0,
    collection: "livingroom",
    description:
      "piti vor lini piti vor lini piti vor lini piti vor lini piti vor lini",
    id: 1,
  },
];

const headerShop = [
  {
    title: "sofa",
    icon: sofa,
    category: "sofa",
    id: 0,
  },
  {
    title: "sofa",
    icon: sofa,
    category: "sofa",
    id: 1,
  },
];

export default function AppRouter() {
  return (
    <div>
      <Header headerShop={headerShop} />
      <Switch>
        <Route path="/" component={HomePage} />
      </Switch>
      <Footer />
    </div>
  );
}
