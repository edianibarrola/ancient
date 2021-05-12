import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SiteInfo = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	return (
		<div className="row ">
			<div className="col text-center">
				<h1>{store.site.name ? store.site.name : "name unavailable"} </h1>
			</div>
		</div>
	);
};

SiteInfo.propTypes = {
	match: PropTypes.object,
	name: PropTypes.string
};
