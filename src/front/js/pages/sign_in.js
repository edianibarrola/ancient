import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import { SignUp } from "../component/signUpModal";
import Button from "react-bootstrap/Button";

export const SignIn = props => {
	const { store, actions } = useContext(Context);
	const [usernameInput, setUsernameInput] = useState("");
	const [userPasswordInput, setUserPasswordInput] = useState("");
	const history = useHistory();

	const params = useParams();

	return (
		<>
			<h1 className="text-center">{store.site.name ? store.site.name : "Sign in"} </h1>
			<div className="row d-inline-flex justify-content-center">
				<form>
					<div className="col  text-center d-flex justify-content-end">
						<label>User Name:</label>
						<input
							type="text"
							name="name"
							value={usernameInput}
							onChange={e => {
								setUsernameInput(e.target.value);
							}}
						/>
					</div>
					<div className="col text-center d-flex justify-content-end">
						<label>Password:</label>
						<input
							type="password"
							name="password"
							value={userPasswordInput}
							onChange={e => {
								setUserPasswordInput(e.target.value);
							}}
						/>
					</div>
					<div className="col text-center d-flex justify-content-end">
						<label>
							{/* <Link to="/profile"> */}
							<button
								type="button"
								onClick={() =>
									actions
										.getToken(usernameInput, userPasswordInput)
										.then(() => history.push("/profile"))
										.catch(msg => alert(msg))
								}>
								Submit
							</button>
							{/* </Link> */}
						</label>
					</div>
					<div className="text-center">
						<SignUp />
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
