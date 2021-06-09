import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SiteInfo = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	return (
		<>
			<h1 className="text-center">{store.site.name ? store.site.name : "name unavailable"} </h1>
			<div className="row d-flex justify-content-center">
				<div className="col-4  text-center">
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
							{store.site.country ? store.site.country : " "}{" "}
							{store.site.continent ? store.site.continent : " "}
						</h5>
						<h5>
							{store.site.date_range_end
								? store.site.date_range_start + "    -    " + store.site.date_range_end
								: store.site.date_range_start}
						</h5>
					</div>
				</div>
				<div className="col-4 infocol ">
					<p>{store.site.details}</p>

					<img src={store.site.img_url} className="siteInfoImage" alt="photo of the site" />
				</div>
			</div>
		</>
	);
};

SiteInfo.propTypes = {
	match: PropTypes.object,
	name: PropTypes.string
};
