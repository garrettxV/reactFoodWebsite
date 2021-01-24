import './SideMenuToggle.css'

const SideMenuToggle = props => {
	return (
		<button className="menu-toggle" onClick={props.click}>
			<div className="menu-toggle__line"></div> 
			<div className="menu-toggle__line"></div>
			<div className="menu-toggle__line"></div>
		</button>
	)
}

export default SideMenuToggle
