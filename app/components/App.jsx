import React from 'react';
import Navbar from './Navbar.jsx';
import Header from './Header.jsx';

export default class App extends React.Component {
  render() {
    return <div id="hero">
    			<Navbar />
    			<Header />
			</div>;
  };
}