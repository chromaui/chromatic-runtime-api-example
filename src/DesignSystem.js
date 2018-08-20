import React from 'react';
import * as headerExamples from './examples/Header';

export default () => {
  return (
    <div>
      <h2>Header</h2>
      {Object.keys(headerExamples).map(name => (
        <div key={name}>
          <h3>{name}</h3>
          {headerExamples[name]()}
        </div>
      ))}
    </div>
  );
};
