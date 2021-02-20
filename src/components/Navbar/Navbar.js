import React from 'react';
import { Link } from 'react-router-dom';
import {IoCartOutline} from 'react-icons/io5'
// import { motion } from 'framer-motion';

const Navbar = (props) => {
	return (
		<div className="header_navigation-items">
			<ul>
				<Link to="/menu" >
					<li onClick={props.pageIsMenu}>Menu</li>
				</Link>
				<Link to="/locations">
					<li>Locations</li>
				</Link>
				<li>
					<a href="/">About</a>
				</li>
				<li>
					<a className="sign__in" onClick={props.click__3}>
						Sign In
					</a>
				</li>
				<li className="cart" onClick={props.pageChange}>
					<IoCartOutline />
					<span className="cart__count">{props.cartLength}</span>
				</li>
			</ul>
		</div>
	);
};

export default Navbar;
