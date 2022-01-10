import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,

} from './NavbarElements';

const Navbar = () => {
return (
	<>
	<Nav>
		<Bars />

		<NavMenu>
		<NavLink to='/about' activeStyle>
			Sobre
		</NavLink>
		<NavLink to='/events' activeStyle>
			Pacotes
		</NavLink>
		<NavLink to='/annual' activeStyle>
			Repositórios
		</NavLink>
		<NavLink to='/team' activeStyle>
			Stars
		</NavLink>
		<NavLink to='/blogs' activeStyle>
			Projetos
		</NavLink>
		
		{/* Second Nav */}
		{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
		</NavMenu>
		
	</Nav>
	</>
);
};

export default Navbar;
