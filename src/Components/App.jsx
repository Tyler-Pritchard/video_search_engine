import React from "react";
import SearchBar from "./SearchBar";
import "./App.css";
import ImageList from "./ImageList";
import ImageDetail from "./ImageDetail";
// import Header from "./Header";

class App extends React.Component {
  state = {
    history: [], // id of seed, location of scroll, exit id / title
    newHistory: [],
    search: [], // current search text
    searchText: "",
    showExplore: false,
    exploreId: "",
    historyText: "welcome to the world of wonder",
    timeoutId: ""
  };

  componentDidMount() {
    this.onTermSubmit("coding");
  }

  onImageSelect = image => {
    this.setState({ selectedImage: image });
  };

  render() {
    return (
      <div>
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
      </div>
    );
  }
}

export default App;
