import React, { useState } from 'react';
import Menu from '../Menu/Menu';
import './FoodMenu.css';

const FoodMenu = (props) => {
	const [ menu ] = useState([
		{
			id: 1,
			food: 'tomato basil pizza',
			ingredients: 'sauce, cheese, tomato, basil'
		},
		{
			id: 2,
			food: 'sausage pizza',
			ingredients: 'sauce, sausage, cheese'
		},
		{
			id: 3,
			food: 'banana split',
			ingredients: 'ice cream, peanut butter'
		}
	]);

	// var tomatoBasil = require("../FoodMenu/Images/tomato-basil.png")

	return (
		<div className="food__menu-container" onClick={props.click__2}>
			<div className="food__menu-header">
				<h1>Our Menu</h1>
			</div>
			<div className="grid__container">
				<div className="grid">
					{/* <div className="item"></div>
      		<div className="item">Item 2</div>
      		<div className="item">Item 3</div>
      		<div className="item">Item 4</div> */}
					<Menu menu={menu} />
				</div>
			</div>
		</div>
	);
};

export default FoodMenu;
