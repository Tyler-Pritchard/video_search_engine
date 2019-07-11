import React from "react";

const ImageDetail = ({ image }) => {
  if (!image) {
    return <div>Loading...</div>;
  }
  const imageSrc = `https://www.silkswap.com/graphql`;
  return (
    <div>
      <div className="ui embed">
        <iframe title="image" src={imageSrc} />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{image.snippet.title}</h4>
        <p>{image.snippet.description}</p>
      </div>
    </div>
  );
};
export default ImageDetail;
