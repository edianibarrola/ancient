import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SiteInfo = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	return (
		<div className="row ">
			<div className="col  text-center">
				<h1>{store.site.name ? store.site.name : "name unavailable"} </h1>
				{console.log(process.env.MAPAPIKEY)}
				<div className="polaroid mx-auto no-gutters">
					<iframe
						width="300"
						height="300"
						style={{ border: "1px solid black" }}
						loading="lazy"
						allowFullScreen
						// src={`https://www.google.com/maps/embed/v1/place?key=${
						// 	process.env.MAPAPIKEY
						// }&maptype=satellite&q=puma+punku`}
						src={
							store.site.map_link
								? `https://www.google.com/maps/embed/v1/place?key=${
										process.env.MAPAPIKEY
								  }&maptype=satellite&q=${store.site.map_link}`
								: `https://www.google.com/maps/embed/v1/place?key=${
										process.env.MAPAPIKEY
								  }&maptype=satellite&q=stone+henge+megalith`
						}
					/>
					<h3>{store.site.name}</h3>
					<h5>
						{store.site.country} {store.site.continent}
					</h5>
					<h5>{store.site.date_range_start}</h5>
				</div>
			</div>
		</div>
	);
};

SiteInfo.propTypes = {
	match: PropTypes.object,
	name: PropTypes.string
};
