import React, { useState } from 'react';
import Header from './components/Header/Header';
import SideMenu from './components/SideMenu/SideMenu';
import Backdrop from './components/Backdrop/Backdrop';
import SignUpLogin from './components/SignUpLogin/SignUpLogin';


const App = () => {

	// Pieces of State for opening and closing the side menu and sign in form
	const [ sideMenuOpen, setState ] = useState(false);
	const [ signUpLoginOpen, setLogin ] = useState(false);
	const [ cart, setCart ] = useState([]);
	const [ { page }, setPage ] = useState({ page: 'menu' });

	// Function that returns the opposite of existing state to open the side menu
	const sideMenuClickHandler = () => {
		setState((prevState) => {
			return { sideMenuOpen: !prevState.sideMenuOpen };
		});
	};

	// Function that closes the side menu by setting the state back to false
	const backdropClickHandler = () => {
		setState(false);
		setLogin(false);
	};

	// Function that returns the opposite of existing state to open the sign in form
	const signUpClickHandler = () => {
		setLogin((prevState) => {
			return { signUpLoginOpen: !prevState.signUpLoginOpen };
		});
	};

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

	let sideMenu;
	let backdrop;
	let signUpLogin

	if (sideMenuOpen) {
		sideMenu = <SideMenu />;
		backdrop = <Backdrop backDropHandler={backdropClickHandler} />;
	}

	if (signUpLoginOpen) {
		signUpLogin = <SignUpLogin contactHandler={backdropClickHandler} />;
	}

	return (
		<div style={{ height: '100%' }} className="App">
			<Header
				menuClickHandler={sideMenuClickHandler}
				foodMenuClickHandler={backdropClickHandler}
				signUpHandler={signUpClickHandler}
				page={page}
				cart={cart}
				addToCart={addToCart}
				pageIsMenu={pageIsMenu}
				cartLength={cartLength}
				pageChange={pageChange}
			/>
			{sideMenu}
			{backdrop}
			{signUpLogin}
		</div>
	);
};

export default App;
