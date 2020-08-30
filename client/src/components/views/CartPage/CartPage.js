import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCartItems } from "../../../_actions/user_actions";
import UserCardBlock from "./UserCardBlock";

function CartPage(props) {
  const dispatch = useDispatch();

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

        dispatch(getCartItems(cartItems, props.user.userData.cart));
      }
    }
  }, [props.user.userData]);

  return (
    <div style={{ width: "85%", margin: "3rem auto" }}>
      cartpage
      <UserCardBlock
        products={props.user.cartDetail && props.user.cartDetail.product}
      />
    </div>
  );
}

export default CartPage;
