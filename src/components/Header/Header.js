import { GiFullPizza } from 'react-icons/gi';
import SideMenuToggle from '../SideMenuToggle/SideMenuToggle';
import Navbar from '../Navbar/Navbar';
import FoodMenu from '../FoodMenu/FoodMenu';
import Locations from '../Locations/Locations';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './Header.css';

const header = (props) => {
	return (
		<Router>
			<div className="container">
				<header className="header">
					<nav className="header__navigation">
						<div>
							<SideMenuToggle click={props.menuClickHandler} />
						</div>
						<div className="spacer2" />
						<div className="header__header">
							<div className="header__icon">
								<GiFullPizza />
							</div>
							<div className="header__logo">
								<a href="/">PIZZA DELIVERY</a>
							</div>
						</div>
						<div className="spacer" />
						<Navbar />
					</nav>
				</header>
				<Switch>
					<Route exact path="/menu">
						<FoodMenu menu={props.menu} click__2={props.foodMenuClickHandler} />
					</Route>
					<Route exact path="/locations">
						<Locations />
					</Route>
				</Switch>
			</div>
		</Router>
	);
};

export default header;
