import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faMap
} from "@fortawesome/free-solid-svg-icons";
import { Nav } from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import classNames from "classnames";

const SideBar = () => {
	
    return (
      <div className={classNames("sidebar", { "is-open": true })}>
        <div className="sidebar-header">
          <h3>Kyupid Dashboard</h3>
        </div>
        <Nav className="flex-column pt-1">
		
          <Nav.Item >
            <Nav.Link activeClassName="active" as={NavLink}  to="/home" >
              <FontAwesomeIcon icon={faHome} className="mr-2" />
              Home
            </Nav.Link>
          </Nav.Item>

          <Nav.Item >
            <Nav.Link activeClassName="active" as={NavLink} to="/pro-user-revenue" >
              <FontAwesomeIcon icon={faMap} className="mr-2" />
              Pro User Revenue
            </Nav.Link>
          </Nav.Item>
		  
		  <Nav.Item >
            <Nav.Link activeClassName="active" as={NavLink} to="/user-acquisition" >
              <FontAwesomeIcon icon={faMap} className="mr-2" />
              User Acquisition
            </Nav.Link>
          </Nav.Item>
		  
		  <Nav.Item >
            <Nav.Link activeClassName="active" as={NavLink} to="/matches-by-area" >
              <FontAwesomeIcon icon={faMap} className="mr-2" />
              MatchesByArea
            </Nav.Link>
          </Nav.Item>
		  
		  <Nav.Item >
            <Nav.Link activeClassName="active" as={NavLink} to="/gender-skew">
              <FontAwesomeIcon icon={faMap} className="mr-2" />
              Gender Skew
            </Nav.Link>
          </Nav.Item>
		  
        </Nav>
      </div>
    );
}

export default SideBar;