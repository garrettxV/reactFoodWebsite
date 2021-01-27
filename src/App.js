import React, { useState } from 'react';
import Header from './components/Header/Header'
import SideMenu from './components/SideMenu/SideMenu'
import Backdrop from './components/Backdrop/Backdrop'

// import Menu from './components/Menu/Menu'

const App = () => {

	const [{ sideMenuOpen }, setIt] = useState({sideMenuOpen: false});

	const sideMenuClickHandler = () => {
		setIt((prevState) => {
			return {sideMenuOpen: !prevState.sideMenuOpen}
		});
	};

	const backdropClickHandler = () => {
		setIt({sideMenuOpen: false})
	};

 	let sideMenu;
	let backdrop;

	if (sideMenuOpen) {
		sideMenu = <SideMenu/>
		backdrop = <Backdrop backDropHandler = {backdropClickHandler}/>
	}

	  return (
    <div style={{height: '100%'}}className="App">
      <Header menuClickHandler={sideMenuClickHandler} foodMenuClickHandler={backdropClickHandler}/>
			{sideMenu}
			{backdrop}
    </div>
	 );
	}

export default App;
