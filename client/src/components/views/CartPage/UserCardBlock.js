import React from "react";
import "./UserCardBlock.css";
import { Button } from "antd";

function UserCardBlock(props) {
  const renderCartImage = (images) => {
    if (images.length > 0) {
      let image = images[0];
      return `http://localhost:5000/${image}`;
    }
  };

  const renderItems = () =>
    props.products &&
    props.products.map((product, i) => (
      <tr
        key={i}
        style={{
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <td>
          <img
            style={{ width: "70px", height: "70px" }}
            alt="productImage"
            src={renderCartImage(product.images)}
          />
        </td>
        <td>{product.title}</td>
        <td>{product.quantity} EA</td>
        <td>$ {product.price}</td>
        <td>
          <Button
            size="large"
            shape="round"
            type="danger"
            onClick={() => props.removeItem(product._id)}
          >
            Remove
          </Button>
        </td>
      </tr>
    ));

  return (
    <div
      style={{
        textAlign: "center",
        maxWidth: "100%",
        border: "1px solid lightgray",
      }}
    >
      <table
        style={{
          textAlign: "center",
          maxWidth: "",
        }}
      >
        <thead style={{ textAlign: "center" }}>
          <th> Image</th>
          <th>Title</th>
          <th> Quantity</th>
          <th> Price</th>
          <th>Remove from Cart</th>
        </thead>
        <tbody>{renderItems()}</tbody>
      </table>
    </div>
  );
}

export default UserCardBlock;
