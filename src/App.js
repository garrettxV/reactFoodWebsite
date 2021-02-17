import React, { useState } from 'react';
import Header from './components/Header/Header';
import SideMenu from './components/SideMenu/SideMenu';
import Backdrop from './components/Backdrop/Backdrop';
import SignUpLogin from './components/SignUpLogin/SignUpLogin';


const App = () => {
	const [ { sideMenuOpen }, setState ] = useState({ sideMenuOpen: false });

	const [ { signUpLoginOpen }, setLogin ] = useState({ signUpLoginOpen: false });

	const sideMenuClickHandler = () => {
		setState((prevState) => {
			return { sideMenuOpen: !prevState.sideMenuOpen };
		});
	};

	const backdropClickHandler = () => {
		setState({ sideMenuOpen: false });
	};

	const signUpClickHandler = () => {
		setLogin((prevState) => {
			return { signUpLoginOpen: !prevState.signUpLoginOpen };
		});
	};

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
