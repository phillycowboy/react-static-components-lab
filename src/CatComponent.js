import React, { Component } from 'react';

 class CatComponent extends Component {
  render() {
    return (
      <div className="bar" id="cat">
        <img src="/cat.gif" alt="cat-image"/>
      </div>
    );
  }
}
export default CatComponent;