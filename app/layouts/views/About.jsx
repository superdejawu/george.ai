import React from 'react';
import {outerContext,browserHistory,Router} from 'react-router';


export default class About extends React.Component {

	render(){
		return <div>
				<button onClick={History.goBack}>
				JUST HIDE MODAL on click outside</button>
			</div>;

	};
}
