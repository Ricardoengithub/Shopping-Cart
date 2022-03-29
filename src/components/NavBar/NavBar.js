import React from 'react';
import PropTypes from 'prop-types';


const Navbar = ({props, logOut}) => {
	return (
		<nav>
			<ul>
				{props.user.userInfo.options.map((item,idx) => <li key={idx}><a href='item'>{item}</a></li>)}
				<li key="user"><span aria-label='user' role="img">👦</span>{props.user.username}</li>
				<li key="logout">
					<button className='btn btn-danger' onClick={() => logOut()}>
						Log out
					</button>
				</li>
			</ul>
		</nav>
	);
}

Navbar.propTypes = {
	logOut: PropTypes.func.isRequired
}


export default Navbar;
