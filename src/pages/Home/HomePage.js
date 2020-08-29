import React, { useEffect } from "react";
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
import { NavLink } from "react-router-dom";
import { useState } from "react";

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

export default function HomePage() {
  
  const [productsonsale, setProductOnSale] = useState([]);

  const fetcheSaledProducts = async () => {
    try {
      const data = await fetch("/products/sale");
      const fetchedData = await data.json();
      setProductOnSale(fetchedData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetcheSaledProducts();
  }, []);
 
  return (
    <div className="homepage flex-column">
      <section className="homepage_carousel">
        <MySlider sliderImages={sliderImages} />
      </section>
      <MultiSlider multiSliderImages={multiSliderImages} />
      <h2 className="font-red font-h1 upper mt-5">Discounted products</h2>
      <div className="discounted_products">
        {productsonsale
          ? productsonsale.map((product, index) =>
              index < 6 ? (
                <ProductCard product={product} key={product._id} />
              ) : null
            )
          : null}
      </div>

      <h2 className="font-red font-h1 upper mt-5">Our Story</h2>
      <div className="our_story">
        <NavLink to="/about" className="home_our_story_link">
          Our Story
        </NavLink>
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
