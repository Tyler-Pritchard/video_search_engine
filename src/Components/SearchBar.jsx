import gql from "graphql-tag";
import ImageItem from "./ImageItem";
import React from "react";
import { Query } from "react-apollo";
import { withQuery } from "apollo-map-props";
withQuery.setConfig({ fetchPolicy: "network-only" });

class SearchBar extends React.Component {
  onInputChange = event => {
    this.setState({ term: event.target.value });
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <div style={{ display: "inline" }}>
          {!this.props.nearestId && (
            <div className="block-container explore-container">
              <Query
                query={gql`
                  query randomQuery($pastIds: [ID]!) {
                    random(length: 200, pastIds: $pastIds) {
                      id
                      small_image_url
                      image_url
                      media_url
                      attachment_url
                      link_url
                      link_image
                      text
                    }
                  }
                `}
                variables={{ pastIds: this.props.idHistory }}
              >
                {({ loading, error, data }) => {
                  if (data) {
                    console.log(data);
                  }
                  if (loading) return <p>Loading...</p>;
                  if (error) console.log(error);

                  if (data) {
                    const idArr = data.random.map(block => block.id);
                    this.props.addIdsToHistory(idArr);

                    return data.random.map(block => this.getBlock(block));
                  }
                  if (!loading && !error && !data) {
                    return <h1>data could not be loaded</h1>;
                  }
                }}
                {this.state.contentList.map(item => (
                  <ImageItem text={item} />
                ))}
              </Query>
            </div>
          )}

          {this.props.nearestId && (
            <div className="exlore-details-container">
              <div className="explore-details-center">
                <div className="block-container explore-details">
                  <Query
                    query={gql`
                      query getNearest($id: ID!, $pastIds: [ID]!) {
                        neighbors(id: $id, pastIds: $pastIds) {
                          tunnelID
                          resources {
                            id
                            image_url
                            small_image_url
                            media_url
                            attachment_url
                            link_url
                            link_image
                            text
                          }
                        }
                      }
                    `}
                    variables={{
                      id: this.props.nearestId,
                      pastIds: this.props.idHistory
                    }}
                  >
                    {({ loading, error, data }) => {
                      if (data) {
                        console.log(data);
                      }
                      if (loading) return <p>Loading...</p>;
                      if (error) console.log(error);

                      if (data && data.neighbors && data.neighbors.resources) {
                        const idArr = data.neighbors.resources.map(
                          block => block.id
                        );
                        this.props.addIdsToHistory(idArr);

                        return data.neighbors.resources.map(block =>
                          this.getBlock(block)
                        );
                      } else {
                        return <h1>No new content found...</h1>;
                      }
                    }}
                  </Query>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default SearchBar;
