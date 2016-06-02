import React from 'react';

import Header from '../components/Header.jsx';
import Items from '../components/Items.jsx';



export default class Home extends React.Component {

	render(){
		return <div>
				<Header />
				<Items />
				</div>;

	};
}
