import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SiteList = props => {
	const { store, actions } = useContext(Context);

	const params = useParams();
	const loc = store.locations;
	return (
		<div className="row ">
			<div className="col text-center">
				<h1>List of all sites </h1>
				<ul>
					{loc.map((item, index) => {
						return (
							<Link to={{ pathname: "/site-info" }} key={index}>
								<li onClick={() => actions.setSite(item)}> {item.name} </li>
							</Link>
						);
					})}
				</ul>
			</div>
		</div>
	);
};

SiteList.propTypes = {
	match: PropTypes.object
};
