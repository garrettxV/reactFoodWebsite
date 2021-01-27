import { GiFullPizza } from "react-icons/gi"
// import SignUpLogin from '../SignUpLogin/SignUpLogin'
import SideMenuToggle from '../SideMenuToggle/SideMenuToggle'
import FoodMenu from '../FoodMenu/FoodMenu'
import './Header.css'

const header = props => {

	return (
		<div className="container">
			<header className="header">
					<nav className="header__navigation">
						<div>
							<SideMenuToggle click={props.menuClickHandler}/>
						</div>
						<div className="spacer2"></div>
						<div className="header__header">
							<div className="header__icon"><GiFullPizza/></div>
							<div className="header__logo"><a href="/">PIZZA DELIVERY</a></div>
					  </div>
						<div className="spacer"></div>
						<div className="header_navigation-items">
							<ul>
								<li><a href="/">MENU</a></li>
								<li><a href="/">PLACE ORDER</a></li>
								<li><a href="/">LOCATIONS</a></li>
								<li><a href="/">ABOUT</a></li>
							</ul>
						</div>
					</nav>
			</header>
			<FoodMenu menu={props.menu} click__2={props.foodMenuClickHandler}/>
		</div>
	)
}

// Header.defaultProps = {
// 	title: 'Pizza Delivery'
// }

export default header;
