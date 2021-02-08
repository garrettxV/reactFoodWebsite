import './SideMenu.css';

const SideMenu = () => {
	// const mediaQueryLists = {
	// 	sm: '(min-width: 801px)',

	// 	md: '(min-width: 1100px)'
	// }

	return (
		<nav className="side-menu">
			<ul>
				<li>
					<a href="/">MENU</a>
				</li>
				<li>
					<a href="/">PLACE ORDER</a>
				</li>
				<li>
					<a href="/">LOCATIONS</a>
				</li>
				<li>
					<a href="/">ABOUT</a>
				</li>
			</ul>
		</nav>
	);
};

export default SideMenu;
