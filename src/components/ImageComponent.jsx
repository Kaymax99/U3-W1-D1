import React from "react";

class ImageComponent extends React.Component {
  render() {
    return <img src={this.props.url} alt={this.props.alt}></img>;
  }
}

export default ImageComponent;
