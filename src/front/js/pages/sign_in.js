import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SignIn = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	return (
		<>
			<h1 className="text-center">{store.site.name ? store.site.name : "Sign in"} </h1>
			<div className="row d-inline-flex justify-content-center">
				<form>
					<div className="col  text-center d-flex justify-content-end">
						<label>User Name:</label>
						<input type="text" name="name" />
					</div>
					<div className="col text-center d-flex justify-content-end">
						<label>Password:</label>
						<input type="password" name="password" />
					</div>
					<div className="col text-center d-flex justify-content-end">
						<label>
							<button type="submit">Submit</button>
						</label>
					</div>
					<div className="text-center">
						<Link to="/sign-up">Not registered yet? Sign up here!</Link>
					</div>
				</form>
			</div>
		</>
	);
};

SignIn.propTypes = {
	match: PropTypes.object,
	name: PropTypes.string
};
