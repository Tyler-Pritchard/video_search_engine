import "./ImageItem.css";
import React from "react";

const ImageItem = ({ props }) => {
  return (
    <div className="image-item">
      <img
        alt={props.data.resources.image_url}
        className="ui image"
        src={props.data.resources.image_url}
      />
      <div className="content">
        <div className="header">Some Text</div>
      </div>
    </div>
  );
};

export default ImageItem;
