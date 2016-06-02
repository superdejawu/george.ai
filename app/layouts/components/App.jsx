import React from 'react';
import Navbar from './Navbar.jsx';
// import Canvas from './Canvas.jsx';
import Header from './Header.jsx';
import Items from './Items.jsx';
// import {Link} from 'react-router';




export default class App extends React.Component {
  render() {
    return <div clasName="container" id="">
    			{/*<Canvas id="absolute" className="header-canvas"/>*/}
          {/*<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>*/}

          	<Navbar />

          {this.props.children}



    			{/*<Header />
    			<Items />*/}
			</div>;
  };
}
