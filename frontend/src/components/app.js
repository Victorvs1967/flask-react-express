// frontend/src/components/app.js

import React from 'react';
import { connect } from 'react-redux';

import CardPage from './cardPage';

const App = ({ pageType }) => {
  
  return (
    <div>
      { pageType === 'card' && <CardPage/> }
    </div>
  );
}

const mapStateToProps = ({ page }) => {
  const { type } = page;
  return {
    pageType: type
  };
};

export default connect(mapStateToProps)(App);