import React, { useState } from 'react';
import Header from './components/Header/Header';
import SideMenu from './components/SideMenu/SideMenu';
import Backdrop from './components/Backdrop/Backdrop';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Menu from './components/Menu/Menu'

const App = () => {
	const [ { sideMenuOpen }, setState ] = useState({ sideMenuOpen: false });

	const sideMenuClickHandler = () => {
		setState((prevState) => {
			return { sideMenuOpen: !prevState.sideMenuOpen };
		});
	};

	const backdropClickHandler = () => {
		setState({ sideMenuOpen: false });
	};

	let sideMenu;
	let backdrop;

	if (sideMenuOpen) {
		sideMenu = <SideMenu backDropHandler={backdropClickHandler} />;
		backdrop = <Backdrop backDropHandler={backdropClickHandler} />;
	}

	return (
		<div style={{ height: '100%' }} className="App">
			<Header menuClickHandler={sideMenuClickHandler} foodMenuClickHandler={backdropClickHandler} />
			{sideMenu}
			{backdrop}
		</div>
	);
};

export default App;
