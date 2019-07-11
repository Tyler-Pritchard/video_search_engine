import React from "react";
import ImageItem from "./ImageItem";

const ImageList = ({ images, onImageSelect }) => {
  const renderedList = images.map(video => {
    return (
      <ImageItem
        key={video.id.videoId}
        onImageSelect={onImageSelect}
        video={video}
      />
    );
  });

  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default ImageList;
