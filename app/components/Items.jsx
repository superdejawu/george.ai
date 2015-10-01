import React from 'react';

export default class Items extends React.Component {
	render() {
		return <div >
				
				<div className="row">
					<div className="item one-half column" data-offset="-100">
						<div className="parallax" >
							{/*<video  src="https://www.leia3d.com/wp-content/uploads/2015/09/leia3d-devkit-eye.mp4"  poster="https://www.leia3d.com/wp-content/uploads/2014/11/leia3d-devkit-eye.jpg" preload loop></video> */}
							<img src="https://www.leia3d.com/wp-content/uploads/2014/11/leia3d-devkit-eye.jpg" className="parallax" />
							<div><h5 >Video Element</h5></div>
						</div>
					</div>
						<div className="item one-half column" data-offset="-100">
						<div className="parallax" >
							{/*<video  src="https://www.leia3d.com/wp-content/uploads/2015/09/leia3d-devkit-eye.mp4"  poster="https://www.leia3d.com/wp-content/uploads/2014/11/leia3d-devkit-eye.jpg" preload loop></video> */}
							<img src="app/images/kano-crop.jpeg" className="parallax" />
							<h5 >Kano App</h5>
						</div>
					</div>
				</div>

				<div className="row" >
					<div className="four columns item">
					</div>
					<div className="four columns item">
					</div>
					<div className="four columns item">
					</div>
				</div>
				<h6><b>01</b>. <span className="subtitle">PROJECTS</span></h6>

		</div>;
	}
}
