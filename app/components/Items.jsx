import React from 'react';

export default class Items extends React.Component {
	render() {
		return <div >
				
				<div className="row">
					<div className="item one-half column" data-offset="-100">
						<div className="parallax" >
							{/*<video  src="https://www.leia3d.com/wp-content/uploads/2015/09/leia3d-devkit-eye.mp4"  poster="https://www.leia3d.com/wp-content/uploads/2014/11/leia3d-devkit-eye.jpg" preload loop></video> */}
							<img src="https://www.leia3d.com/wp-content/uploads/2014/11/leia3d-devkit-eye.jpg" className="parallax" />
							<h5 >Seein Believing</h5>
						</div>
					</div>
						<div className="item one-half column" data-offset="-100">
						<div className="parallax" >
							{/*<video  src="https://www.leia3d.com/wp-content/uploads/2015/09/leia3d-devkit-eye.mp4"  poster="https://www.leia3d.com/wp-content/uploads/2014/11/leia3d-devkit-eye.jpg" preload loop></video> */}
							<img src="https://www.leia3d.com/wp-content/uploads/2014/11/leia3d-devkit-eye.jpg" className="parallax" />
							<h5 >Seein Believing</h5>
						</div>
					</div>
				</div>

				<h6><b>01</b>. <span className="subtitle">PROJECTS</span></h6>


				<div className="row" >
					<div className="four columns item">
					</div>
					<div className="four columns item">
					</div>
					<div className="four columns item">
					</div>
				
				</div>
		</div>;
	}
}
