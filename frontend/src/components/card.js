import React from 'react';

const Card = ({ name, markdown }) => {

  return (
    <div>
      <h1>{ name }</h1>
      <div dangerouslySetInnerHTML={{ __html: markdown }} />
    </div>
  );
};

export default Card;