import React from "react";
import "./homepage.scss";
import MySlider from "../../components/Slider/MySlider";
import slider_2 from "../../assets/slider_2.jpg";
import slider_3 from "../../assets/slider_3.jpg";
import main from "../../assets/main.jpg";
import bed from "../../assets/bed.png";
import bedroom from "../../assets/bedroom.png";
import clothes from "../../assets/clothes.png";
import desk from "../../assets/desk.png";
import desktop from "../../assets/desktop.png";
import dinner_table from "../../assets/dinner-table.png";
import dressing_table from "../../assets/dressing-table.png";
import furniture from "../../assets/furniture.png";
import MultiSlider from "../../components/MultiSlider/MultiSlider";
import ProductCard from "../../components/ProductCard/ProductCard";
import rosesofa from "../../assets/rosesofa.JPG";
import brownsofa from "../../assets/brownsofa.JPG";
import rosedivan from "../../assets/rosedivan.JPG";

const sliderImages = [main, slider_2, slider_3];
const multiSliderImages = [
  { image: bed, title: "Bed" },
  { image: bedroom, title: "Bedroom" },
  { image: clothes, title: "Clothes" },
  { image: desk, title: "Desk" },
  { image: desktop, title: "Desktop" },
  { image: dinner_table, title: "Dinner Table" },
  { image: dressing_table, title: "Dressing Table" },
  { image: furniture, title: "Furniture" },
];

const productsonsale = [
  {
    image: rosesofa,
    id: 0,
    price: 399,
    images: [rosesofa, rosesofa, rosesofa],
    title: "Green Corner",
    sale: 15,
  },
  {
    image: rosedivan,
    id: 1,
    price: 399,
    images: [rosesofa, rosesofa, rosesofa],
    title: "Green Corner",
    sale: 8,
  },
  {
    image: brownsofa,
    id: 2,
    price: 399,
    images: [rosesofa, rosesofa, rosesofa],
    title: "Green Corner",
    sale: 20,
  },
  {
    image: rosedivan,
    id: 3,
    price: 399,
    images: [rosesofa, rosesofa, rosesofa],
    title: "Green Corner",
    sale: 25,
  },
  {
    image: brownsofa,
    id: 4,
    price: 399,
    images: [rosesofa, rosesofa, rosesofa],
    title: "Green Corner",
    sale: 0,
  },
  {
    image: rosesofa,
    id: 5,
    price: 399,
    images: [rosesofa, rosesofa, rosesofa],
    title: "Green Corner",
    sale: 15,
  },
];

export default function HomePage() {
  return (
    <div className="homepage flex-column">
      <section className="homepage_carousel">
        <MySlider sliderImages={sliderImages} />
      </section>
      <MultiSlider multiSliderImages={multiSliderImages} />
      <h2 className="font-red font-h1 upper mt-5">Discounted products</h2>
      <div className="discounted_products">
        {productsonsale.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>

      <h2 className="font-red font-h1 upper mt-5">New Collections</h2>
      <div className="our_collections">
        <div className="our_collection"></div>
        <div className="our_collection" id="collection_2"></div>
        <div className="our_collection" id="collection_3"></div>
        <div className="our_collection" id="collection_4"></div>
      </div>
    </div>
  );
}
