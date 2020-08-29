import React from "react";
import { useState } from "react";
import { connect } from "react-redux";
import { useEffect } from "react";
import CartItem from "../../components/CartItem/CartItem";

function CartPage(props) {
  const [cartProducts, setCartProducts] = useState([]);
  console.log(cartProducts);
  useEffect(() => {
    if (props.data) {
      props.data.map((product) => {
        if (props.cartItemsID[product._id]) {
          setCartProducts((prev) => {
            return [
              ...prev,
              {
                ...product,
                count: props.cartItemsID[product._id],
                totalPrice: props.cartItemsID[product._id] * product.price,
              },
            ];
          });
        }
        return null;
      });
    }
  }, [props.data]);
  return (
    <div className="width-100 pt-7 flex-column">
      <div className="flex width-100">
        <table className="ui celled table width-75">
          <thead>
            <tr>
              <th className="width-25">Product</th>
              <th className="width-25">Title</th>
              <th className="width-25">Quantity</th>
              <th className="width-25">Price</th>
            </tr>
          </thead>
          {cartProducts ? (
            cartProducts.map((item) => {
              return (
                <tbody key={item._id}>
                  <tr className="width-100">
                    <td data-label="Name" className="">
                      {" "}
                      <img
                        src={item.images[0]}
                        alt={item.description}
                        width="100%"
                      />
                    </td>
                    <td data-label="Age" className="height-100 font-large jscac capitalize">
                      {item.title}
                    </td>
                    <td data-label="Age" className="">
                      {item.count}
                    </td>
                    <td data-label="Job" className="">
                      {item.totalPrice}$
                    </td>
                  </tr>
                </tbody>
              );
            })
          ) : (
            <p>There is not items here yet</p>
          )}
        </table>

        <div className="width-25">
          <p>hello wrold</p>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    data: state.fetchData.products,
  };
};

export default connect(mapStateToProps)(CartPage);
