import './Header.css';
import { GiFullPizza } from 'react-icons/gi';
import SideMenuToggle from '../SideMenuToggle/SideMenuToggle';
import Navbar from '../Navbar/Navbar';
import FoodMenu from '../FoodMenu/FoodMenu';
import Locations from '../Locations/Locations';
import Hero from '../Hero/Hero';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Header = (props) => {
	const [ cart, setCart ] = useState([]);
	const [ { page }, setPage ] = useState({ page: 'menu' });

	const pageChange = () => {
		setPage('cart');
	};

	const pageIsMenu = () => {
		setPage({ page: 'menu' });
	};

	const addToCart = (item) => {
		setCart([ ...cart, item ]);
	};

	const cartLength = cart.length;

	return (
		<Router>
			<div className="container">
				<motion.header className="header" initial={{ y: -250 }} animate={{ y: -5 }}>
					<nav className="header__navigation">
						<div>
							<SideMenuToggle click={props.menuClickHandler} />
						</div>
						<div className="spacer2" />
						<div className="header__header">
							<div className="header__icon">
								<GiFullPizza />
							</div>
							<header className="header__logo">
								<Link to="/">Pizza Delivery</Link>
							</header>
						</div>
						<div className="spacer" />
						<Navbar
							click__3={props.signUpHandler}
							cartLength={cartLength}
							pageChange={pageChange}
							pageIsMenu={pageIsMenu}
						/>
					</nav>
				</motion.header>
				<Switch>
					<Route exact path="/">
						<Hero />
					</Route>
					<Route exact path="/menu">
						<FoodMenu
							menu={props.menu}
							click__2={props.foodMenuClickHandler}
							addToCart={addToCart}
							page={page}
							cart={cart}
						/>
					</Route>
					<Route exact path="/locations">
						<Locations />
					</Route>
				</Switch>
			</div>
		</Router>
	);
};

export default Header;
