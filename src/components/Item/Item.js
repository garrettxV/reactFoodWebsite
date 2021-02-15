const Item = ({ item }) => {
	return (
		<div>
			<div className="item" />
			<div className="item__header">
				<img src={item.image} alt="food" />
			</div>
			<div className="item__footer">
				<p>{item.food}</p>
			</div>
		</div>
	);
};

export default Item;
