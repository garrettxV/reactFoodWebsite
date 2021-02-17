import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<div className="header_navigation-items">
			<ul>
				<Link to="/menu">
					<li>Menu</li>
				</Link>
				<li>
					<a href="/">Place Order</a>
				</li>
				<Link to="/locations">
					<li>Locations</li>
				</Link>
				<li>
					<a href="/">About</a>
				</li>
			</ul>
		</div>
	);
};

export default Navbar;
