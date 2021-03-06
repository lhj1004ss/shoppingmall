import React, { useState } from "react";
import { Typography, Button, Form, Input } from "antd";
import TextArea from "antd/lib/input/TextArea";
import FileUpload from "../../utils/FileUpload";
import Axios from "axios";

const { Title } = Typography;
const { textarea } = Input;

const kinds = [
  { key: 1, value: "Casual" },
  { key: 2, value: "Sports" },
  { key: 3, value: "Suit" },
  { key: 4, value: "Belt" },
  { key: 5, value: "Cap" },
  { key: 6, value: "Socks" },
  { key: 7, value: "Underwear" },
];

function UploadProductPage(props) {
  const [Name, setName] = useState("");
  const [Description, setDescription] = useState("");
  const [Price, setPrice] = useState(0);
  const [Kind, setKind] = useState(1);

  const [Images, setImages] = useState([]);

  const nameChangeHandler = (e) => {
    setName(e.currentTarget.value);
  };

  const descriptionChangeHandler = (e) => {
    setDescription(e.currentTarget.value);
  };

  const priceChangeHandler = (e) => {
    setPrice(e.currentTarget.value);
  };

  const kindChangeHandler = (e) => {
    setKind(e.currentTarget.value);
  };

  const updateImages = (newImages) => {
    setImages(newImages);
  };
  const onSubmit = (e) => {
    e.preventDefault();

    if (!Name || !Description || !Price || !Kind || !Images) {
      return alert("please fill out all options");
    }

    const variables = {
      //current login user ID
      writer: props.user.userData._id,
      title: Name,
      description: Description,
      price: Price,
      images: Images,
      kinds: Kind,
    };

    Axios.post("/api/product", variables).then((response) => {
      if (response.data.success) {
        alert("succeeded to upload clothing");
        // go to shop
        props.history.push("/landingpage");
      } else {
        alert("failed to upload clothing");
      }
    });
  };

  return (
    <div style={{ maxWidth: "700px", margin: "2rem auto" }}>
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <Title level={1}> Used Products Upload</Title>
      </div>
      <Form onSubmit={onSubmit}>
        {/* clothing upload*/}
        <FileUpload refreshFunction={updateImages} />
        <br />
        <br />
        <label style={{ color: "black" }}>Product Name</label>
        <Input
          style={{ color: "black", border: "2px solid darkgreen" }}
          onChange={nameChangeHandler}
          value={Name}
        />
        <br />
        <br />
        <label style={{ color: "black" }}>Description</label>
        <TextArea
          style={{ color: "black", border: "2px solid darkgreen" }}
          onChange={descriptionChangeHandler}
          value={Description}
        ></TextArea>
        <br />
        <br />
        <label style={{ color: "black" }}>Price</label>
        <Input
          style={{ color: "black", border: "2px solid darkgreen" }}
          type="number"
          onChange={priceChangeHandler}
          value={Price}
        />
        <br />
        <br />
        <select
          style={{ color: "darkgreen" }}
          onChange={kindChangeHandler}
          value={Kind}
        >
          {kinds.map((item) => (
            <option key={item.key} value={item.key}>
              {item.value}
            </option>
          ))}
        </select>
        <br />
        <br />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button
            style={{
              color: "white",
              background: "darkgreen",
              fontWeight: "bold",
            }}
            type="submit"
            onClick={onSubmit}
          >
            Upload
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default UploadProductPage;
