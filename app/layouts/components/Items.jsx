import React from 'react';
import {Link} from 'react-router';


let imgRoot="app/images/";
let items = [
 	{key:0, img: `${imgRoot}maide-control.jpg`, title:"Maide Control", description:"This is a decsription of cool shiz. It is cool shiz all the way. Trust me."},
	{key:1, img: `${imgRoot}kano-crop.jpg`, title:"Kano", description:"This is a decsription of cool shiz. It is cool shiz all the way. Trust me."},
	{key:2, img: `${imgRoot}maven-intro.png`, title:"Maven", description:"This is a decsription of cool shiz. It is cool shiz all the way. Trust me."},
  {key:3, img: `${imgRoot}maide-control.jpg`, title:"Maide Control", description:"This is a decsription of cool shiz. It is cool shiz all the way. Trust me."},
	{key:4, img: `${imgRoot}kano-crop.jpg`, title:"Kano", description:"This is a decsription of cool shiz. It is cool shiz all the way. Trust me."},
	{key:5, img: `${imgRoot}maven-intro.png`, title:"Maven", description:"This is a decsription of cool shiz. It is cool shiz all the way. Trust me."}
];


export default class Item extends React.Component {

	render(){
    var backgroundStyle = {backgroundImage:`url(${this.props.img})`};

		return <div className="item-box">
            <Link to='/catalog'>
              <div className="item">
                <img src={this.props.img} />
      					<h5>{this.props.title}</h5>
      					<p>{this.props.description}</p>
              </div>
            </Link>

          </div>;
	}
}

export default class Items extends React.Component {
	render() {
		return <div>
    <br></br>


			<div className="container">
        <h6>FEATURED</h6>
        <div className="items-container">
          <div className="items">
  				    {items.map( (item) => {return <Item key={item.key} img={item.img} title={item.title} description={item.description} />} )}
          </div>
        </div>


        <h6>DEVELOPMENT</h6>

      </div>
		</div>;
	}
}
