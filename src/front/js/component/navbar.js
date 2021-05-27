import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";

export const Navbar = () => {
	return (
		<nav className="navbar  mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Past Point</span>
			</Link>
			<div className="ml-auto">
				<Dropdown>
					<Dropdown.Toggle variant="secondary" id="dropdown-basic">
						<i className="fas fa-gopuram" />
					</Dropdown.Toggle>

					<Dropdown.Menu className="dropMenu">
						<Dropdown.Item href="/sign-in">Sign In</Dropdown.Item>
						<Dropdown.Item href="/profile">Profile</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
			</div>
		</nav>
	);
};
