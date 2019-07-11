import React, { Component } from "react";
import SearchBar from "./SearchBar";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import ImageList from "./ImageList";
import ImageDetail from "./ImageDetail";
// import Header from "./Header";

class App extends Component {
  state = { images: [], selectedImage: null };
  componentDidMount() {
    this.onTermSubmit("coding");
  }

  onTermSubmit = async term => {
    const response = await api.get("/search", {
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
    console.log(this.state, "STATE");
    return (
      <Router>
        {/* <Header /> */}
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
              <div className="five wide column">
                <ImageList
                  onImageSelect={this.onImageSelect}
                  images={this.state.images}
                />
              </div>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
