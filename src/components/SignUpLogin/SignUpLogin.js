import './SignUpLogin.css';
import { IoIosAdd } from "react-icons/io";

const SignUpLogin = props => {
	return (
		<div className="contact__card-backdrop">
			<div className="contact__card-container">
			<div className="contact__card">
				<button className="contact__card-close" onClick={props.contactHandler}><IoIosAdd /></button>
				<h2 className="contact-card_greeting"> Sign In</h2>
				<div className="form__container">
					<form className="contact-card_form" action="">
						<input type="email" name="name" id="Name" placeholder="Email" className="contact-card_input" />
						<input
							type="password"
							name="email"
							id="email"
							placeholder="Password"
							className="contact-card_input"
						/>
					</form>
				</div>
			</div>
			</div>
		</div>
	);
};

export default SignUpLogin;
