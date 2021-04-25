import React, {lazy,Suspense} from "react";
import { Route, Switch,Redirect } from 'react-router-dom';
import { Container } from "react-bootstrap";
import classNames from "classnames";

import SideBar from "./Layout/SideBar";
import NavBar from "./Layout/Navbar";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"

const Home = lazy(() => import("./Components/Home"));
const GenderSkew = lazy(() => import("./Components/Maps/GenderSkew"));
const ProUserRevenue = lazy(() => import("./Components/Maps/ProUserRevenue"));
const UserAcquisition = lazy(() => import("./Components/Maps/UserAcquisition"));
const MatchesByArea = lazy(() => import("./Components/Maps/MatchesByArea"));

const App = () => {
	
	const routes = [
		{
		  path: '/home',
		  component: Home,
		}, {
		  path: '/gender-skew',
		  component: GenderSkew,
		}, {
		  path: '/pro-user-revenue',
		  component: ProUserRevenue,
		}, {
		  path: '/user-acquisition',
		  component: UserAcquisition,
		}, {
		  path: '/matches-by-area',
		  component: MatchesByArea,
		}
	];

	return (
		<div className="App wrapper">

			<SideBar />
			
			<Container fluid className={classNames("content", { "is-open": true })}>
	
				<div className="AppContent">
					<NavBar />
					<Suspense fallback={<div>Loading...</div>}>
					<Switch>
						{
							routes.map((route, index) => (
								<Route key={index} {...route} />
							))
						}
						<Redirect from="/" to="/home" />
					</Switch>
					</Suspense>
					
				</div>
				
			</Container>
			
		</div>
	);
}

export default App