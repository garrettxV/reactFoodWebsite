import '../FoodMenu/FoodMenu.css';
const Cart = (props) => {
	const renderCart = () => (
		<div className="grid__container">
			<div className="grid">
				{props.cart.map((cartItem) => (
					<div>
						<div className="item" />
						<div className="item__contents">
							<figure className="item__fig">
								<img src={cartItem.image} alt="food" className="item__img" />
								<figcaption className="item__item">{cartItem.food}</figcaption>
								<figcaption className="item__ingredients">{cartItem.ingredients}</figcaption>
							</figure>
						</div>
					</div>
				))}
			</div>
		</div>
	);

	return <div>{renderCart()}</div>;
};
export default Cart;
