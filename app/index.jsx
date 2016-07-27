import './styles/normalize.css';
import './styles/_skeleton.scss';
import './styles/style.scss';
import './styles/polyfill.object-fit.css'



import React from 'react';
import { Router, Route , IndexRedirect, IndexRoute, hashHistory,browserHistory} from 'react-router';

//import views
import App from './layouts/components/App.jsx';
import Home from './layouts/views/Home.jsx';
import About from './layouts/views/About.jsx';
import Navbar from './layouts/components/Navbar.jsx';

//import portfolio items
import * as portfolio from './layouts/portfolio/portfolio.jsx';

main();

function main() {
	const app = document.createElement('div');

	const router = (
	  <Router history={browserHistory}>
	    <Route path="/" component={Home}>
				{/*<IndexRedirect to="home" />*/}
				<IndexRoute component={Home} />
				<Route path="home" component = {Home}>
					<Route path = "/:id" component = {portfolio['PortfolioItem']} />
					{/*<Route path = "/:id" component = {portfolio.Catalog} />*/}
				</Route>

				<Route path="about" component = {About} />

			</Route>
	  </Router>
	);

	document.body.appendChild(app);

	React.render(router, app);

}
