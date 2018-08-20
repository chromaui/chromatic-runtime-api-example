import React from 'react';
import Header from '../Header';

export const basic = () => <Header>title</Header>;

export const empty = () => <Header />;

export const long = () => (
  <Header>
    lorem ipsum dolor set. lorem ipsum dolor set. lorem ipsum dolor set. lorem ipsum dolor set.
  </Header>
);
