import React, { Component } from 'react';
import Header from './components/Header/Header'
import SideMenu from './components/SideMenu/SideMenu'
import Backdrop from './components/Backdrop/Backdrop'

class App extends Component {

	state = {
		sideMenuOpen: false
	};

	sideMenuClickHandler = () => {
		this.setState((prevState) => {
			return {sideMenuOpen: !prevState.sideMenuOpen}
		});
	};

	backdropClickHandler = () => {
		this.setState({sideMenuOpen: false})
	};

render() {
 	let sideMenu;
	let backdrop;

	if (this.state.sideMenuOpen) {
		sideMenu = <SideMenu/>
		backdrop = <Backdrop backDropHandler = {this.backdropClickHandler}/>
	}

	  return (
    <div style={{height: '100%'}}className="App">
      <Header menuClickHandler={this.sideMenuClickHandler} />
			{sideMenu}
			{backdrop}
    </div>
	 );
	}
}

export default App;
