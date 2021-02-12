

const Item = ({ item }) => {

	const imageStyle={
		background: `url(${item.image}) no-repeat center center fixed`
	}
	
	return (
		<div className="item" style={imageStyle}>
			<h3>{item.food}</h3>
			<h2>{item.ingredients}</h2>
		</div>
	);
};

export default Item;
