import React from 'react';

export default class Header extends React.Component {
	render() {
		return <div >
			<div className="container">
				<div className="row" id="header">
					<div className="column header-text">

						<h5 style={{"marginBottom":".5em"}}>Personal site of <b>George Wu</b></h5>

						<h1>Design. Code. <br /> Break Things.</h1>

					</div>
				</div>
			</div>
		</div>;
	}
}
