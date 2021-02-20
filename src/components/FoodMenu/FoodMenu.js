import React, { useState } from 'react';
import './FoodMenu.css';
import Cart from '../Cart/Cart';

const FoodMenu = (props) => {
	const [ menu ] = useState([
		{
			id: 1,
			food: 'Tomato Basil',
			ingredients: 'sauce, cheese, tomato, basil',
			image: '/tom-basil.png',
			dollarAmount: '$10.99',
			price: 10.99
		},
		{
			id: 2,
			food: 'Combo',
			ingredients: 'sauce, sausage, cheese',
			image: '/combo.jpg'
		},
		{
			id: 3,
			food: 'The Mediterranean',
			ingredients: 'cheese, sauce, tomato',
			image: '/mediterranean.png'
		},
		{
			id: 3,
			food: 'The Mediterranean',
			ingredients: 'cheese, sauce, tomato',
			image: '/mediterranean.png'
		},
		{
			id: 3,
			food: 'The Mediterranean',
			ingredients: 'cheese, sauce, tomato',
			image: '/mediterranean.png'
		}
	]);

	const renderMenu = () => (
		<div className="grid__container">
			<div className="grid">
				{menu.map((item) => (
					<div>
						<div className="item" />
						<div className="item__contents">
							<figure className="item__fig">
								<img src={item.image} alt="food" className="item__img" />
								<figcaption className="item__item">{item.food}</figcaption>
								<figcaption className="item__ingredients">{item.ingredients}</figcaption>
							</figure>
							<button onClick={() => props.addToCart(item)}>Add To Cart</button>
						</div>
					</div>
				))}
			</div>
		</div>
	);

	console.log(props.cart);

	return (
		<div className="food__menu-container" onClick={props.click__2}>
			<header className="food__menu-header">
				<h1>Menu</h1>
			</header>
			{props.page === 'menu' ? renderMenu() : <Cart cart={props.cart} />}
		</div>
	);
};

export default FoodMenu;
