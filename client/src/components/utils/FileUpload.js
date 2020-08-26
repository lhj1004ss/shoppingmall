import React, { useState } from "react";
import Dropzone from "react-dropzone";
import { Icon } from "antd";
import axios from "axios";
// import "./FileUpload.css";

function FileUpload(props) {
  const [Images, setImages] = useState([]);

  const fileUploadHandler = (files) => {
    let formData = new FormData();

    const config = {
      header: { "clothing-type": "multipart/form-data" },
    };
    formData.append("file", files[0]);
    axios.post("/api/product/image", formData, config).then((response) => {
      if (response.data.success) {
        // console.log(response.data);
        setImages([...Images, response.data.filePath]);
        props.refreshFunction(...Images, response.data.filePath);
      } else {
        alert("failed to save images");
      }
    });
  };

  const imageDeleteHandler = (image) => {
    const currentIndex = Images.indexOf(image);
    // console.log("currentIndex", currentIndex);
    let newImages = [...Images];
    // splice ===remove index, 1 ===only 1EA
    newImages.splice(currentIndex, 1);
    setImages(newImages);
    props.refreshFunction(newImages);
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <Dropzone onDrop={fileUploadHandler}>
        {({ getRootProps, getInputProps }) => (
          <section>
            <div
              className="hello"
              style={{
                width: "300px",
                height: "240px",
                border: "2px solid black",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "2rem",
              }}
              {...getRootProps()}
            >
              <input {...getInputProps()} />
              <Icon type="plus" style={{ fontSize: "3rem" }} />
            </div>
          </section>
        )}
      </Dropzone>

      {/* thumbnail */}
      <div
        style={{
          display: "flex",
          width: "350px",
          height: "240px",
          overflow: "scroll",
        }}
      >
        {Images.map((image, index) => (
          <div
            onClick={() => {
              imageDeleteHandler(image);
            }}
            key={index}
          >
            <img
              style={{ minWidth: "300px", width: "300px", height: "250px" }}
              src={`http://localhost:5000/${image}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default FileUpload;
