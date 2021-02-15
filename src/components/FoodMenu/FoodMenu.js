import React, { useState } from 'react';
import Menu from '../Menu/Menu';
import './FoodMenu.css';
// import pizza from '../FoodMenu/images/tom-basil.png';

const FoodMenu = (props) => {
	const [ menu ] = useState([
		{
			id: 1,
			food: 'tomato basil pizza',
			ingredients: 'sauce, cheese, tomato, basil',
			image:'/tom-basil.png'
		},
		{
			id: 2,
			food: 'combo pizza',
			ingredients: 'sauce, sausage, cheese',
			image:'/combo.jpg'
		},
		{
			id: 3,
			food: 'cheese pizza',
			ingredients: 'cheese, sauce'
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
					<Menu menu={menu} />
				</div>
			</div>
		</div>
	);
};


export default FoodMenu;
