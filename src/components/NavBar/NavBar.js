import React, { useState } from 'react';
import PropTypes from 'prop-types';


const Navbar = ({props}) => {
	return (
		<nav>
			<ul>
				{props.user.userInfo.options.map((item,idx) => <li key={idx}><a>{item}</a></li>)}
				<li key="user">👦{props.user.username}</li>
				<li key="logout">
					<button className='btn btn-danger'>
						Log out
					</button>
				</li>
			</ul>
		</nav>
	);
}


export default Navbar;
