import './Header.css';
import { GiFullPizza } from 'react-icons/gi';
import SideMenuToggle from '../SideMenuToggle/SideMenuToggle';
import Navbar from '../Navbar/Navbar';
import FoodMenu from '../FoodMenu/FoodMenu';
import Locations from '../Locations/Locations';
import Hero from '../Hero/Hero';
import Cart from '../Cart/Cart';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Header = (props) => {
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
							cartLength={props.cartLength}
							pageChange={props.pageChange}
							pageIsMenu={props.pageIsMenu}
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
							addToCart={props.addToCart}
							page={props.page}
							cart={props.cart}
						/>
					</Route>
					<Route exact path="/cart">
						<Cart cart={props.cart} cartLength={props.cartLength} />
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
