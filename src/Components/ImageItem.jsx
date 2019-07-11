import "./ImageItem.css";
import React from "react";

const ImageItem = ({ image, onimageSelect }) => {
  return (
    <div onClick={() => onImageSelect(image)} className="image-item">
      <img
        alt={image.snippet.title}
        className="ui image"
        src={image.snippet.thumbnails.medium.url}
      />
      <div className="content">
        <div className="header">{image.snippet.title}</div>
      </div>
    </div>
  );
};

export default ImageItem;
