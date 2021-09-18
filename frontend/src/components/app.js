// frontend/src/components/app.js

import React, { Component } from 'react';
import { connect } from 'react-redux';

import moduleName from './cardPage';

class App extends Component {
  render() {
    const { pageType } = this.props;
    return (
      <div>
        { pageType === 'card' && <CardPage/> }
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { page } = state;
  const { type } = page;
  return {
    pageType: type
  };
};

export default connect(mapStateToProps)(App);