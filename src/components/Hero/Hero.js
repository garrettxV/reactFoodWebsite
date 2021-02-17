import pizza from '/Users/Garrett/react-app/src/Images/Chef.svg';
import './Hero.css';
import { motion } from 'framer-motion';

const Hero = (props) => {
	return (
		<div className="hero">
			<div className="hero__grid">
				<div className="hero__grid-text">
					<motion.h1 initial={{ x: -600 }} animate={{ x: 5 }} transition={{ duration: 1.5 }}>
						Fresh Handmade Pizza
					</motion.h1>
					<motion.p initial={{ x: -1000 }} animate={{ x: 5 }} transition={{ ease: 'easeOut', duration: 2.5 }}>
						Our pizza is handmade with only the highest quality ingredients. It's always hot and fresh, and
						satisfaction is guaranteed.
					</motion.p>
				</div>
				<motion.div
					className="hero__grid-img"
					initial={{ y: 1000 }}
					animate={{ y: 5 }}
					transition={{ duration: 1 }}
				>
					<img height={500} src={pizza} alt="pizza" />
				</motion.div>
			</div>
		</div>
	);
};

export default Hero;
