import React from 'react';
import {Link} from 'react-router';

export default class Modal extends React.Component {

	render(){

		//lock scrolling in background when not in modal
		let page = document.getElementsByTagName("html")[0];
		page.style.overflow = "hidden";

		return <section className="modal">
						<Link to='home' >
							<div className= "modal-bg" />
						</Link>

						<div className= "modal-content">
			          {this.props.children}
						</div>
					</section>;
	};
}
