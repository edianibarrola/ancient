import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SiteList = props => {
	const { store, actions } = useContext(Context);
	const [search, setSearch] = useState("");
	const params = useParams();
	const loc = store.locs;

	const handleInputChange = input => {
		actions.setFilterBy(input);
	};

	return (
		<div className="container">
			<div className="row ">
				<div className="col text-center">
					<h1>List of all sites </h1>
					<div className="row">
						{}
						<div className="col">
							<input
								type="text"
								placeholder="Filter..."
								onChange={e => {
									setSearch(e.target.value);
								}}
							/>
							<button onClick={e => actions.setFilterByArray(search)}>Filter</button>
							<button onClick={e => actions.setFilterByArray("")}>Full List</button>
						</div>
					</div>
					<div className="row   list-row">
						{store.filteredList != ""
							? store.filteredList.map((item, index) => {
									return (
										<Link to={{ pathname: "/site-info" }} key={index}>
											<div className="col my-3  mx-auto" onClick={() => actions.setSite(item)}>
												{/* <div className="list-name-text ">
											<h3>{item.name}</h3>
										</div> */}
												<div className="list-details-text">
													{/* <h5>{item.continent + " - " + item.country}</h5> */}
												</div>
												<div className="polaroid">
													<img
														className="list-img-thumb  darken-img align-self-center"
														style={{ maxHeight: "10vh" }}
														src={item.img_url}
														alt={item.name + " photograph"}
													/>
													<div>
														<h3 className="centered-img-text  polaroid-thumb">
															{item.name}
														</h3>
														<h5 className=" polaroid-thumb">
															{item.continent}: {item.country}
														</h5>
														<h5>{item.date_range_start}</h5>
													</div>
												</div>
											</div>
										</Link>
									);
									// `https://www.google.commaps/embed/v1/place?key=${process.env.MAPAPIKEY}&maptype=satellite&q=goebekli+tepe`
							  })
							: loc.map((item, index) => {
									return (
										<Link to={{ pathname: "/site-info" }} key={index}>
											<div className="col my-3  mx-auto" onClick={() => actions.setSite(item)}>
												{/* <div className="list-name-text ">
											<h3>{item.name}</h3>
										</div> */}
												<div className="list-details-text">
													{/* <h5>{item.continent + " - " + item.country}</h5> */}
												</div>
												<div className="polaroid">
													<img
														className="list-img-thumb  darken-img align-self-center"
														style={{ maxHeight: "10vh" }}
														src={item.img_url}
														alt={item.name + " photograph"}
													/>
													<div>
														<h3 className="centered-img-text  polaroid-thumb">
															{item.name}
														</h3>
														<h5 className=" polaroid-thumb">
															{item.continent}: {item.country}
														</h5>
														<h5>{item.date_range_start}</h5>
													</div>
												</div>
											</div>
										</Link>
									);
									// `https://www.google.commaps/embed/v1/place?key=${process.env.MAPAPIKEY}&maptype=satellite&q=goebekli+tepe`
							  })}
					</div>
				</div>
			</div>
		</div>
	);
};

SiteList.propTypes = {
	match: PropTypes.object
};
