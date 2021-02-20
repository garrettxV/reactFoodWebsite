import './SignUpLogin.css';
import { IoIosAdd } from 'react-icons/io';

const SignUpLogin = (props) => {
	return (
		<div className="contact__card-backdrop">
			<div className="contact__card-container">
				<div className="contact__card">
					<div className="contact__card-close-container">
						<button className="contact__card-close" onClick={props.contactHandler}>
							<IoIosAdd />
						</button>
					</div>
					<form className="contact__card-form" action="">
						<fieldset className="contact__fieldset">
							<legend className="contact__greeting">Sign In</legend>
							<input
								type="email"
								name="email"
								id="email"
								placeholder="Email"
								className="contact__card-input"
							/>
							<input
								type="password"
								name="password"
								id="password"
								placeholder="Password"
								className="contact__card-input"
							/>
						</fieldset>
					</form>
				</div>
			</div>
		</div>
	);
};

export default SignUpLogin;
