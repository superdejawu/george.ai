import './styles/normalize.css';
import './styles/_skeleton.scss';
import './styles/style.scss';
import './styles/polyfill.object-fit.css'


import React from 'react';
import App from './components/App.jsx';

main();

function main() {
	const app = document.createElement('div');

	document.body.appendChild(app);

	React.render(<App />, app);
  
}

