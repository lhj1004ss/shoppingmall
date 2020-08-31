import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getCartItems, removeCartItem } from "../../../_actions/user_actions";
import UserCardBlock from "./UserCardBlock";
import { Empty, Button } from "antd";
import Paypal from "../../utils/Paypal";

function CartPage(props) {
  const dispatch = useDispatch();
  const [Total, setTotal] = useState(0);
  const [ShowTotal, setShowTotal] = useState(false);

  useEffect(() => {
    let cartItems = [];
    // check a pruduct is in cart or not inside redux

    if (props.user.userData && props.user.userData.cart) {
      // pruduct is more than 0 means there is product in cart
      if (props.user.userData.cart.length > 0) {
        // get each item
        props.user.userData.cart.forEach((item) => {
          cartItems.push(item.id);
        });

        dispatch(getCartItems(cartItems, props.user.userData.cart)).then(
          (response) => {
            productTotal(response.payload);
          }
        );
      }
    }
  }, [props.user.userData]);

  let productTotal = (cartDetail) => {
    let total = 0;

    cartDetail.map((item) => {
      total += parseInt(item.price, 10) * item.quantity;
    });
    setTotal(total);
    setShowTotal(true);
  };
  let removeHandler = (productId) => {
    dispatch(removeCartItem(productId)).then((response) => {
      console.log(response);
      // there nothing in the cartpage
      if (response.payload.productInfo.length <= 0) {
        setShowTotal(false);
      }
    });
  };

  return (
    <div
      style={{
        width: "85%",
        margin: "3rem auto",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1 style={{ textAlign: "center" }}>My Cart</h1>
      <div style={{ marginBottom: "1rem" }}>
        <UserCardBlock
          products={props.user.cartDetail}
          removeItem={removeHandler}
        />
      </div>
      {ShowTotal ? (
        <div
          style={{
            margintop: "3rem",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <h2> Total Amount:$ {Total}</h2>
        </div>
      ) : (
        <div>
          <Empty />

          <a href="/">
            <Button
              size="large"
              shape="round"
              type="danger"
              style={{
                margin: "1rem auto",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Go Shopping
            </Button>
          </a>
        </div>
      )}
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Paypal />
      </div>
    </div>
  );
}

export default CartPage;
