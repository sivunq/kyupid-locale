import React from "react";
import { Navbar } from "react-bootstrap";
import {useLocation} from 'react-router-dom';

const NavBar = () => {
	const location = useLocation();
	
	let header, locat=location.pathname;
	
	if(locat==="/home")header="Home";
	else if (locat==="/gender-skew")header="Gender Skew";
	else if (locat==="/pro-user-revenue")header="Pro User Revenue";
	else if (locat==="/user-acquisition")header="User Acquisition";
	else if (locat==="/matches-by-area")header="Matches By Area";
	else header="Kyupid Dashboard";
	
    return (
      <Navbar
        bg="light" variant="light"
        className="justify-content-center navbar shadow-sm p-2 mb-2 rounded"
        expand
      >
		<b><h3>{header}</h3></b>
      </Navbar>
    );
}

export default NavBar;