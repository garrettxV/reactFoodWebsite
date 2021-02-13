const Item = ({ item }) => {
	// const imageStyle = {
	// 	background: `url(${item.image}) no-repeat center center fixed`
	// };

	return (
		<div>
			<div className="item" />
			<div className="item__header">
				{/* <p>{item.food}</p> */}
				<img src={item.image} alt="food" />
			</div>
			<div className="item__footer">
				<p>{item.food}</p>
			</div>
		</div>
	);
};

export default Item;
