import React, { useState } from 'react';
import Header from './components/Header/Header';
import SideMenu from './components/SideMenu/SideMenu';
import Backdrop from './components/Backdrop/Backdrop';
import SignUpLogin from './components/SignUpLogin/SignUpLogin';


const App = () => {

	// Pieces of State for opening and closing the side menu and sign in form
	const [ { sideMenuOpen }, setState ] = useState({ sideMenuOpen: false });
	const [ { signUpLoginOpen }, setLogin ] = useState({ signUpLoginOpen: false });

	// Function that returns the opposite of existing state to open the side menu
	const sideMenuClickHandler = () => {
		setState((prevState) => {
			return { sideMenuOpen: !prevState.sideMenuOpen };
		});
	};

	// Function that closes the side menu by setting the state back to false
	const backdropClickHandler = () => {
		setState({ sideMenuOpen: false });
	};

	// Function that returns the opposite of existing state to open the sign in form
	const signUpClickHandler = () => {
		setLogin((prevState) => {
			return { signUpLoginOpen: !prevState.signUpLoginOpen };
		});
	};

	// Function that closes the sign in form by setting the state back to false
	const contactBackdropClickHandler = () => {
		setLogin({ signUpLoginOpen: false });
	};

	let sideMenu;
	let backdrop;
	let signUpLogin

	if (sideMenuOpen) {
		sideMenu = <SideMenu />;
		backdrop = <Backdrop backDropHandler={backdropClickHandler} />;
	}

	if (signUpLoginOpen) {
		signUpLogin = <SignUpLogin contactHandler={contactBackdropClickHandler} />;
	}

	return (
		<div style={{ height: '100%' }} className="App">
			<Header
				menuClickHandler={sideMenuClickHandler}
				foodMenuClickHandler={backdropClickHandler}
				signUpHandler={signUpClickHandler}
			/>
			{sideMenu}
			{backdrop}
			{signUpLogin}
		</div>
	);
};

export default App;
