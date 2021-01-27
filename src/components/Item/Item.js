const Item = ({ item }) => {
	return (
		<div className="item">
			<h3>{item.food}</h3>
			<h2>{item.ingredients}</h2>
		</div>
	);
};

export default Item;
