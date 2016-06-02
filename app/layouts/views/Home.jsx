import React from 'react';
import {Link} from 'react-router';

import Header from '../components/Header.jsx';
import Items from '../components/Items.jsx';


export default class Home extends React.Component {

	render(){
		return <div>
				{this.props.children}
					<div>
						<Header />
						<Items />
					</div>


				</div>;

	};
}
