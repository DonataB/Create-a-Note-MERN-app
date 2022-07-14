import React from "react";
import { NavBar, Navilink } from "./Navbar.style";

const NavigationBar = () => {
	return (
		<NavBar>
			<Navilink to='/'>Home</Navilink>
			<Navilink to='/create'>Create Note</Navilink>
			<Navilink to='/all-notes'>Notes</Navilink>
		</NavBar>
	);
};

export default NavigationBar;
