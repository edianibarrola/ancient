import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar  mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Past Point</span>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary">...</button>
				</Link>
			</div>
		</nav>
	);
};
