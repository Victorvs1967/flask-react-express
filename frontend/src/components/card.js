import React from 'react';

const Card = ({ name, html }) => {

  return (
    <div>
      <h1>{ name }</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
};

export default Card;