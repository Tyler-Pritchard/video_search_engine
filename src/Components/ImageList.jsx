import React from "react";
import ImageItem from "./ImageItem";

const ImageList = ({ images, onImageSelect }) => {
  const renderedList = images.map(image => {
    return (
      <ImageItem
        key={image.id.imageId}
        onImageSelect={onImageSelect}
        image={image}
      />
    );
  });

  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default ImageList;
