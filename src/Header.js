import React from 'react';

export default function Header({ children, ...props }) {
  return (
    <h1 style={{ background: '#eee' }} {...props}>
      {children}
    </h1>
  );
}
