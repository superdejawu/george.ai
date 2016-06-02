import React from 'react';
import {Link} from 'react-router';

import Header from '../components/Header.jsx';
import Items from '../components/Items.jsx';


export default class Home extends React.Component {


	render(){

		let page = document.getElementsByTagName("html")[0];
		page.style.overflow = "auto";

		return <div>
				{this.props.children}
					<div>
						<Header />
						<Items />
					</div>


				</div>;

	};
}
