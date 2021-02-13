import Item from '../Item/Item'

// const menu = [
// 	{id: 1, food: 'tomato basil pizza', 
// 	ingredients: 'sauce, cheese, tomato, basil'
// 	},
// 	{id: 2, food: 'sausage pizza', 
// 	ingredients: 'sauce, sausage, cheese'
// 	}
// ]



const Menu = ({ menu }) => {

	return (
		<>
			{menu.map((item) => (
				<Item key={item.id} item={item} ></Item>
			))}
		</>
	)
}

export default Menu

