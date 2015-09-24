import React from 'react';

export default class Navbar extends React.Component {
	render() {
		return <div>
		
			<div className="container" >
				<div id="navbar" className="row">
					<div id="navbar-logo" className="one-third column">

						<img src="app/images/G Logo.png" ></img>
					</div>
					<div id ="navbar-links" className="two-thirds column">
						<h6><b>NAV LINKS HERE</b></h6>
					</div>
				</div>
			</div>
	
		</div>;
	}
}