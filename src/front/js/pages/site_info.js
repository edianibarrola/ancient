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
				{console.log(process.env.MAPAPIKEY)}
				<iframe
					width="600"
					height="450"
					style={{ border: 0 }}
					loading="lazy"
					allowFullScreen
					// src={`https://www.google.com/maps/embed/v1/place?key=${
					// 	process.env.MAPAPIKEY
					// }&maptype=satellite&q=puma+punku`}
					src={store.site.maplink}
				/>
			</div>
		</div>
	);
};

SiteInfo.propTypes = {
	match: PropTypes.object,
	name: PropTypes.string
};
