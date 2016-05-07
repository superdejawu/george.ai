import React from 'react';

let imgRoot="app/images/";
let items = [
 	{img: `${imgRoot}MaideControl.jpeg`, title:"Maide Control", description:"cool shiz"},
	{img: `${imgRoot}kano-crop.jpeg`, title:"Kano", description:"cool shiz"},
	{img: `${imgRoot}Maven_Intro.png`, title:"Maven", description:"cool shiz"}

];

export default class Item extends React.Component {
	render(){

	}
}

export default class Items extends React.Component {
	render() {
		return <div>

				<div className="container">

					VIEW: <span className="subtitle"><a href="#">PROJECTS</a></span>
					<p / >

					{items.map((item)=>{return(item.title)})}


					<div className="row">
						<div className="three columns" data-offset="-100">
							<a href="#">
								<div className="item overlay red" >
									{/*<video  src="https://www.leia3d.com/wp-content/uploads/2015/09/leia3d-devkit-eye.mp4"  poster="https://www.leia3d.com/wp-content/uploads/2014/11/leia3d-devkit-eye.jpg" preload loop></video> */}
									<img src='{item.img}'className= "object-fit_cover"/>
									<h5 >items </h5>

								</div>
							</a>
						</div>
						<div className="three columns" data-offset="-100">
							<a href="#">
								<div className="item overlay red" >
									{/*<video  src="https://www.leia3d.com/wp-content/uploads/2015/09/leia3d-devkit-eye.mp4"  poster="https://www.leia3d.com/wp-content/uploads/2014/11/leia3d-devkit-eye.jpg" preload loop></video> */}
									<img src="app/images/kano-crop.jpeg" className= "object-fit_cover"/>
									<h5 >Kano App</h5>
								</div>
							</a>
						</div>
						<div className="three columns" data-offset="-100">
							<a href="#">
								<div className="item overlay red" >
									{/*<video  src="https://www.leia3d.com/wp-content/uploads/2015/09/leia3d-devkit-eye.mp4"  poster="https://www.leia3d.com/wp-content/uploads/2014/11/leia3d-devkit-eye.jpg" preload loop></video> */}
									<img src="app/images/Maven_Intro.png" className= "object-fit_cover"/>
									<h5 >Maide Control</h5>

								</div>
							</a>
						</div>
						<div className="three columns" data-offset="-100">
							<a href="#">
								<div className="item overlay red" >
									{/*<video  src="https://www.leia3d.com/wp-content/uploads/2015/09/leia3d-devkit-eye.mp4"  poster="https://www.leia3d.com/wp-content/uploads/2014/11/leia3d-devkit-eye.jpg" preload loop></video> */}
									<img src="app/images/Influitive_Dashboard.png" className= "object-fit_cover"/>
									<h5 >Maide Control</h5>

								</div>
							</a>
						</div>
					</div>


					<div className="row">
						<div className="three columns" data-offset="-100">
							<a href="#">
								<div className="item overlay red" >
									{/*<video  src="https://www.leia3d.com/wp-content/uploads/2015/09/leia3d-devkit-eye.mp4"  poster="https://www.leia3d.com/wp-content/uploads/2014/11/leia3d-devkit-eye.jpg" preload loop></video> */}
									<img src="app/images/Umbra_Swivel.png" className= "object-fit_cover"/>
									<h5 >Maven App</h5>

								</div>
							</a>
						</div>
						<div className="three columns" data-offset="-100">
							<a href="#">
								<div className="item overlay red" >
									{/*<video  src="https://www.leia3d.com/wp-content/uploads/2015/09/leia3d-devkit-eye.mp4"  poster="https://www.leia3d.com/wp-content/uploads/2014/11/leia3d-devkit-eye.jpg" preload loop></video> */}
									<img src="app/images/Influitive_Dashboard.png" className= "object-fit_cover"/>
									<h5 >Influitive Dashboard</h5>
								</div>
							</a>
						</div>
						<div className="three columns" data-offset="-100">
							<a href="#">
								<div className="item overlay red" >
									{/*<video  src="https://www.leia3d.com/wp-content/uploads/2015/09/leia3d-devkit-eye.mp4"  poster="https://www.leia3d.com/wp-content/uploads/2014/11/leia3d-devkit-eye.jpg" preload loop></video> */}
									<img src="app/images/MaideControl.jpeg" className= "object-fit_cover"/>
									<h5 >Maide Control</h5>

								</div>
							</a>
						</div>
						<div className="three columns" data-offset="-100">
							<a href="#">
								<div className="item overlay red" >
									<img src="app/images/kano-crop.jpeg" className= "object-fit_cover"/>
									<h5 >Kano App</h5>
								</div>
							</a>
						</div>
					</div>


				</div>
		</div>;
	}
}
