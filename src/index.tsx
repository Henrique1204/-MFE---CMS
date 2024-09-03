import React from 'react';
import ReactDOM from 'react-dom';

import singleSpaReact from 'single-spa-react';

import App from './App';

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: App,
  errorBoundary(err) {
    return <div>Ocorreu um erro: {err.message}</div>;
  },
});

export const { bootstrap, mount, unmount } = lifecycles;
