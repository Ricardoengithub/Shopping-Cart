import React, {useState} from 'react';
import PropTypes from 'prop-types';

const Login = ({ validateData }) => {

		const [data, setData] = useState({
			user: "",
			password: ""
		})

		function handleChange(event) {
			setData({
				...data,
				[event.target.name]: event.target.value
			})
		}

		function handleSubmit(e) {
			e.preventDefault()
			validateData(data.user, data.password)
		}

    return (
			<div className='main'>
				<h3>Login</h3>
				<form onSubmit={(e) => handleSubmit(e)}>
					<div className="mb-3">
						<label className="form-label">Username:</label>
						<input className="form-control" type="text" name="user" onChange={(e) => handleChange(e)} required />
					</div><br/>
					<div className="mb-3">
						<label className="formal-label">Password:</label>
						<input className="form-control" type="password" name="password" onChange={(e) => handleChange(e)} required />
					</div><br/>
					<button type="submit" className="btn btn-primary">Log in</button>
				</form>
			</div>
    );
}

Login.propTypes = {
    validateData: PropTypes.func.isRequired
}

export default Login;
