import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<div className="header_navigation-items">
			<ul>
				<Link to="/menu">
					<li>MENU</li>
				</Link>
				<li>
					<a href="/">PLACE ORDER</a>
				</li>
				<Link to="/locations">
					<li>LOCATIONS</li>
				</Link>
				<li>
					<a href="/">ABOUT</a>
				</li>
			</ul>
		</div>
	);
};

export default Navbar;
