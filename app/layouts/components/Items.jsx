import React from 'react';
import {Link} from 'react-router';


let imgRoot="app/images/";
let itemList = [
 	{id:0, link: 'maide', img: `${imgRoot}maide-control.jpg`, title:"Maide Control", description:"This is a decsription of cool shiz. It is cool shiz all the way. Trust me."},
	{id:1, link: 'kano', img: `${imgRoot}kano-crop.jpg`, title:"Kano", description:"This is a decsription of cool shiz. It is cool shiz all the way. Trust me."},
	{id:2, link: 'maven', img: `${imgRoot}maven-intro.png`, title:"Maven", description:"This is a decsription of cool shiz. It is cool shiz all the way. Trust me."},
  {id:3, link: 'maide2', img: `${imgRoot}maide-control.jpg`, title:"Maide Control", description:"This is a decsription of cool shiz. It is cool shiz all the way. Trust me."},
	{id:4, link: 'kano2', img: `${imgRoot}kano-crop.jpg`, title:"Kano", description:"This is a decsription of cool shiz. It is cool shiz all the way. Trust me."},
	{id:5, link: 'maven2', img: `${imgRoot}maven-intro.png`, title:"Maven", description:"This is a decsription of cool shiz. It is cool shiz all the way. Trust me."}
];


export default class Item extends React.Component {

	render(){
    var backgroundStyle = {backgroundImage:`url(${this.props.img})`};

    var prevLink="#",
        nextLink="#";

      //Create links for the item prior to this one
      if (this.props.id > 0) {
        prevLink = <Link to={{pathname: `/${itemList[this.props.id-1].link}`}}>Prev</Link>;

      }
      else {
        prevLink= {};
      }
    //Create links for the item after this one
    if (this.props.id < itemList.length-1) {
      nextLink = <Link to={{pathname: `/${itemList[this.props.id+1].link}`}}>Next</Link>;

    }
    else {
      nextLink = {};
    }

    console.log(this.props.key)
		return <div className="item-box">
            {prevLink}
            {nextLink}
            <Link to={{pathname: `/${this.props.link}`}}>
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
  				    {itemList.map( (item) => {return <Item key={item.id} id={item.id} link={item.link} img={item.img} title={item.title} description={item.description} />} )}
          </div>
        </div>


        <h6>DEVELOPMENT</h6>

      </div>
		</div>;
	}
}
