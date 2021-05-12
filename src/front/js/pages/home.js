import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import pyramidImageUrl from "../../img/sphynxFrontSmall.jpg";
import "../../styles/home.scss";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<div className="text-center mt-5">
				<h1>Past Point</h1>
			</div>
			<div className="text-center mt-2">
				<h3>Ancient Site Locator</h3>
			</div>
			<div className="w-50 text-center d-flex align-content-between justify-content-around mx-auto mt-2">
				<Link to="/site-list">List View </Link>

				<Link>Random Site</Link>
			</div>
		</>
	);
};
