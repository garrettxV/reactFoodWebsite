import React, { useState } from 'react';
import './FoodMenu.css';
import { IoCartOutline } from 'react-icons/io5';


const FoodMenu = (props) => {
	const [ cart, setCart ] = useState([]);
	const [ page, setPage ] = useState('menu');

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

	const addToCart = (item) => {
		setCart([ ...cart, item ]);
	};

	const renderMenu = () => (
		<>
			<div className="grid__container">
				<div className="grid">
					{menu.map((item) => (
						<div>
							<div className="item" />
							<div className="item__contents">
								<img src={item.image} alt="food" className="item__img" />
								<p className="item__item">{item.food}</p>
								<p className="item__ingredients">{item.ingredients}</p>
								<button onClick={() => addToCart(item)}>Add To Cart</button>
							</div>
						</div>
					))}
				</div>
			</div>
			</>
		);

	console.log(cart);
	return (
		<div className="food__menu-container" onClick={props.click__2}>
			<header className="food__menu-header">
				<span>Menu</span>
				<div className="food__menu-spacer" />
				<button className="food__menu-cart"><IoCartOutline /><div>{cart.length}</div></button>
			</header>
			{page === 'menu' && renderMenu()}
		</div>
	);
}

export default FoodMenu;
