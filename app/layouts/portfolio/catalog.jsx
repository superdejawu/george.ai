import React from 'react';
import {Link} from 'react-router';


var videoStyle ={width:"100%"};

export default class Catalog extends React.Component {


	render(){

		let modalStyle= {
			zIndex:'2',
			background: 'rgba(132, 150, 173, .8)',
			bottom: '0',
			left: '0',
			overflow: 'auto',
			position: 'fixed',
			right: '0',
			top: '0'

		}
		let modalContentStyle = {
			zIndex:'3',
			position: 'relative',
			margin: '5%',
			boxShadow: '0px 1.5rem 1.5rem .9rem rgba(0, 0, 0, 0.2)',
			overflow: 'auto',
			background: '#fff'
		};

		let modalBgStyle = {

			position:'fixed',
			width:'100%',
			height:'100%'
		}


		return <section style={modalStyle}>
						<Link to='home'>
							<div style={modalBgStyle}  />
						</Link>

						<div style={modalContentStyle}>
			        <video src="app/images/CatalogApp_s.mp4" style={videoStyle}/>
							<div className="container center">
			          <h2>THIS IS THE CATALOG PAGE</h2>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus feugiat nunc sollicitudin ex vulputate, efficitur aliquam turpis maximus. Sed eu fringilla erat. Phasellus quis vulputate augue. Sed ut eros quis neque aliquam commodo. Morbi ut fringilla lectus. Maecenas nec ex justo. Quisque id tortor libero. Morbi bibendum leo neque, ut rhoncus lacus porttitor nec. Phasellus orci justo, dictum a volutpat ac, eleifend vel neque. Aenean tincidunt in magna vitae cursus. Duis rhoncus eleifend sapien id ultrices. Integer at lorem et massa rhoncus accumsan. Nulla placerat lectus sed congue lacinia.

								Sed vulputate vel ligula vitae porta. Curabitur malesuada, lorem at lacinia aliquet, justo massa venenatis felis, sed placerat est leo eu purus. Curabitur posuere dolor nec dui dignissim, ac mattis augue ultrices. Etiam interdum diam at elit varius, vitae ornare massa ornare. Suspendisse at interdum turpis. Duis at posuere metus. Donec sed ullamcorper arcu, sit amet finibus tellus. In sed rhoncus purus. Aenean mollis, mauris non bibendum lacinia, felis tortor rhoncus ligula, ac dignissim nunc ex id libero. Aliquam aliquam orci massa.

								Morbi id dolor nunc. Donec ultricies non lacus id commodo. Vivamus at lacus faucibus nulla molestie ornare tincidunt nec justo. Praesent tincidunt mi ipsum, in semper est fermentum et. Suspendisse dapibus, elit at viverra posuere, leo nibh accumsan velit, id porta quam lacus vel libero. Integer pulvinar, ex hendrerit accumsan porttitor, nisi dolor vulputate sem, vitae ultricies ex erat at nunc. Praesent porta quam sit amet ipsum lacinia laoreet. Morbi faucibus molestie nulla, quis malesuada magna. Morbi et neque ac nulla mollis commodo. Quisque ac quam a ipsum lacinia convallis eu ut libero. Duis felis ipsum, sollicitudin ac mi id, dapibus euismod augue. Vivamus egestas malesuada quam, id cursus mi sollicitudin egestas. Nam vel scelerisque ipsum, sit amet faucibus mauris. Nam ut orci odio. Ut ullamcorper a odio vitae egestas. Sed faucibus enim quis est dignissim, vitae convallis tellus faucibus.

								Nunc ac magna at nisl vestibulum ornare vel nec sapien. Aenean non nunc posuere sapien condimentum sagittis eu non urna. Suspendisse id hendrerit mi. Aliquam in lectus nibh. Etiam luctus ornare placerat. Donec cursus est et lacus sollicitudin, cursus viverra ante dignissim. Sed ultricies blandit lacus eu mattis. Nullam accumsan tortor eu massa auctor fermentum.

								Pellentesque sit amet gravida magna, quis sodales arcu. Donec pulvinar ac lacus sed pretium. Maecenas vestibulum nisi vel iaculis tincidunt. Maecenas nisi nulla, dictum id sapien nec, lacinia semper turpis. Maecenas venenatis sodales dolor, sed posuere lectus iaculis a. Praesent a justo ullamcorper, eleifend neque in, mollis nisi. Pellentesque ultrices, turpis nec imperdiet venenatis, nulla augue condimentum sapien, non tincidunt odio augue sed mi. Fusce faucibus egestas interdum. Donec eu commodo dolor, ut auctor neque.
			        </div>


						</div>

					</section>;

	};
}
