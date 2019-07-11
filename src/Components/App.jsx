import React from "react";
import SearchBar from "./SearchBar";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import ImageList from "./ImageList";
import ImageDetail from "./ImageDetail";
// import Navbar from "./common/Navbar";
// import Header from "./Header";
import getConfig from "../eventService";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink } from "apollo-link-http";
import { ApolloClient } from "apollo-client";
import { gql } from "apollo-boost";
import { ApolloProvider } from "react-apollo";

const { publicRuntimeConfig } = getConfig();

const client = new ApolloClient({
  link: createHttpLink({ uri: publicRuntimeConfig.graphqlUrl }),
  cache: new InMemoryCache()
});

class App extends React.Component {
  state = { images: [], selectedImage: null };
  componentDidMount() {
    this.onTermSubmit("coding");
  }

  onTermSubmit = async term => {
    const response = await client.get("/search", {
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
      <ApolloProvider client={client}>
        <Router>
          {/* <Navbar />
        <Header /> */}
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
      </ApolloProvider>
    );
  }
}

export default App;
