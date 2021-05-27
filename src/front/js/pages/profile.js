import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const Profile = () => {
	const { store, actions } = useContext(Context);
	const [profile, setProfile] = useState(null);
	useEffect(() => {
		const fetchData = async () => {
			const results = await actions.getProfile();
			setProfile(results);
		};
		fetchData();
	}, []);
	return (
		<div className="container">
			<div className="row ">
				<div className="col-12">
					<h1 className="text-center">Profile</h1>
				</div>
				<div className="col-4 d-flex justify-content-center">
					<img src="https://via.placeholder.com/150" alt="place holder img" />
				</div>
				<div className="col-8">
					<h1>User Name</h1>
				</div>
				<div className="col-12 text-center">
					<h2>Details: </h2>
				</div>
				<div className="container mx-auto">
					<div className="row  align-items-center">
						<div className="col-4 text-center">First Name: </div>
						<div className="col-8">
							<input className="profileInput" type="text" placeholder="edian " size="50" />
						</div>

						<div className="col-4 text-center">Last Name: </div>
						<div className="col-8">
							<input className="profileInput" type="text" placeholder="ibarrola" size="50" />
						</div>

						<div className="col-4 text-center">Email: </div>
						<div className="col-8">
							<input
								className="profileInput"
								type="text"
								placeholder="edianibarrola@gmail.com"
								size="50"
							/>
						</div>
						<div className="col-12 d-flex justify-content-center">
							<button>Save Changes</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
