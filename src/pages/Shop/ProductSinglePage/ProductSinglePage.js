import React, { useState, useEffect, useCallback } from "react";
import "./singlepage.scss";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

export default function ProductSinglePage() {
  const productId = useParams().id;

  useEffect(() => {
    fetchSingle(productId);
  }, [productId]);

  const [item, setItem] = useState({});

  const [currentSlide, setCurrentSlide] = useState(0);

  const swap = useCallback(
    (num) => {
      item.images?.length &&
        setCurrentSlide(
          (aImg) => (aImg + num + item.images?.length) % item.images?.length
        );
    },
    [item.images]
  );

  const fetchSingle = async (id) => {
    try {
      const data = await fetch(`/products/product/${id}`);
      const fetchedData = await data.json();
      setItem(fetchedData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="single_page">
      <div className="single_page_main_image">
        <div className="current_slide">
          <img
            src={item.images?.length > 0 ? item.images[currentSlide] : null}
            alt="main"
            width="100%"
          />
          <div className="slider-button-left" onClick={() => swap(-1)}>
            <FontAwesomeIcon icon={faChevronLeft} />{" "}
          </div>
          <div className="slider-button-right" onClick={() => swap(1)}>
            <FontAwesomeIcon icon={faChevronRight} />
          </div>
        </div>

        <div className="single_slider_images">
          {item.images?.length > 0
            ? item.images.map((image, index) => {
                return (
                  <div
                    className="single_slider_image"
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                  >
                    <img src={image} alt={index} width="100%" />
                  </div>
                );
              })
            : null}
        </div>
      </div>

      <div className="single_page_description">
        <h2 className="font-large upper font-whitesmoke">{item.title}</h2>
        <p className="font-medium font-whitesmoke">
          Price:
          <span className={item.sale === 0 ? null : "underline"}>
            {item.price}$
          </span>
          {item.newprice !== 0 ? item.newprice + "$" : null}
        </p>
        <p className="font-medium font-whitesmoke">
          Description: {item.description}
        </p>
      </div>
    </div>
  );
}
