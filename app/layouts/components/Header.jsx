import React from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';



export default class Header extends React.Component {
	render() {
		return <div >
			<div className="container" id="header">
				<div className="row" >
					<div className="column header-text">


						<h1>Design. Code.<br /> Break Things.</h1>
						<h4 className="subtitle">Test site of <b>George Wu</b></h4>


					</div>
				</div>
			</div>
		</div>;
	}
}
