import './SignUpLogin.css'

const SignUpLogin = props => {
	return (
		<div className="contact__card">
						<h2 className="contact-card_greeting"> LOG IN</h2>
						<div className="form__container">
						<form className="contact-card_form" action="">
							<input type="text" name="name" id="Name" placeholder="Username" className="contact-card_input"/>
							<input type="email" name="email" id="email" placeholder="Email" className="contact-card_input"/>
						</form>
						</div>
		</div>
	)
}

export default SignUpLogin
