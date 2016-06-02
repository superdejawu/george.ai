import React from 'react';
import {Link} from 'react-router';


export default class Navbar extends React.Component {
	render() {
		return <div>

			<div className="container" >
				<div id="navbar" className="row">
					<Link to="home">
						<div id="navbar-logo" className="one-third column">

							<img src="app/images/G Logo.png" ></img>
						</div>
					</Link>
					<div id ="navbar-links" className="two-thirds column">
						<nav className= "right cl-effect-10">

							<Link to="home" >
								<h5 className = "left">
									00
								</h5>

								<div className="line-separator">

								</div>

								<div className="right">
									 <small>PROJECTS</small>
								</div>
							</Link>

							<Link to="about" >
								<h5 className = "left">
									01
								</h5>
								<div className="line-separator">
								</div>

								<div className=" right">
									 <small>ABOUT</small>
								</div>
							</Link>
						</nav>

					</div>
				</div>
			</div>

		</div>;
	}
}
