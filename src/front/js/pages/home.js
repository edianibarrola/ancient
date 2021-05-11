import React, { useContext } from "react";
import { Context } from "../store/appContext";
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
				<h5>Ancient Site Locator</h5>
			</div>
		</>
	);
};
