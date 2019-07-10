import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import ImageList from "./ImageList";
import ImageDetail from "./ImageDetail";

class App extends React.Component {
  state = { images: [], selectedImage: null };

  componentDidMount() {
    this.onTermSubmit("coding");
  }

  onTermSubmit = async term => {
    const response = await youtube.get("/search", {
      params: {
        q: term
      }
    });
    this.setState({
      images: response.data.items,
      selectedImage: response.data.items[0]
    });
  };

  onImageSelect = image => {
    this.setState({ selectedImage: image });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <ImageDetail image={this.state.selectedImage} />
            </div>
            <div className="five wide column">
              <ImageList
                onImageSelect={this.onImageSelect}
                images={this.state.images}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
