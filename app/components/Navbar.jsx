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
						<nav className= "right cl-effect-10">
						
							<a href="#" > 
								<h5 className = "left">
									00
								</h5>
								
								<div className="line-separator">

								</div>

								<div className="right">
									 <small>PROJECTS</small>
								</div>
							</a>

							<a href="#" > 
								<h5 className = "left">
									01
								</h5>
								
								<div className="line-separator">

								</div>

								<div className="right">
									 <small>BLOG</small>
								</div>
							</a>

							<a href="#" > 
								<h5 className = "left">
									10
								</h5>
								<div className="line-separator">
								</div>

								<div className=" right">
									 <small>ABOUT</small>
								</div>
							</a>
						</nav>

					</div>
				</div>
			</div>
	
		</div>;
	}
}