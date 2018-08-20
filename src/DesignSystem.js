import React from 'react';
import * as headerExamples from './examples/Header';

import configure from 'react-chromatic';

const runtime = {
  runtime: 'design-system',
  specs: () =>
    Object.keys(headerExamples).map(name => ({
      component: { name: 'Header' },
      name,
      input: '{}',
    })),
  renderSpec: ({ component: { name: componentName }, name }) => {
    if (componentName !== 'Header') {
      throw new Error('Unknown component!');
    }

    return headerExamples[name]();
  },
};

configure(runtime);

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
