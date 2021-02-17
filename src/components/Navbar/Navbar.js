import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { IoCartOutline } from 'react-icons/io5';

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
				<li>
					<a href="/" className="sign__in">
						Sign In
					</a>
				</li>
				<li className="cart">
					<IoCartOutline />
				</li>
			</ul>
		</div>
	);
};

export default Navbar;
