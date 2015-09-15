import './styles/normalize.css';
import './styles/skeleton.scss';

import React from 'react';
import App from './components/App.jsx';

main();

function main() {
  const app = document.createElement('div');

  document.body.appendChild(app);

  React.render(<App />, app);
}