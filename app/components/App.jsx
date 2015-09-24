import React from 'react';
import Navbar from './Navbar.jsx';
import Canvas from './Canvas.jsx';
import Header from './Header.jsx';


export default class App extends React.Component {
  render() {
    return <div id="">
    			<Canvas id="absolute" className="header-canvas"/>

    			<Navbar />

    			<Header />
			</div>;
  };
}