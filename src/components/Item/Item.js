// import { useState } from 'react';
// import Cart from '../Cart/Cart';

// const Item = ({ item }) => {
// 	const [ cart, setCart ] = useState([]);
// 	const [ carts, setCarts ] = useState([]);

// 	const addItem = () => {
// 		setCart([
// 			...cart,
// 			{
// 				id: cart.length,
// 				value: `${item.food}`
// 			}
// 		]);
// 	};

// 	// const addCart = () => {
// 	// 	setCarts([ ...carts, cart ]);
// 	// };

// 	// console.log(carts);

// 	return (
// 		<div>
// 			<div className="item" />
// 			<div className="item__contents">
// 				<img src={item.image} alt="food" className="item__img" />
// 				<p className="item__item">{item.food}</p>
// 				<p className="item__ingredients">{item.ingredients}</p>
// 				<button onClick={addItem}>Add To Cart</button>
// 			</div>
// 			<ul>{cart.map((thing) => <li key={thing.id}>{thing.value}</li>)}</ul>
// 		</div>
// 	);
// };

// export default Item;
