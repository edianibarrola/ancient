import React from "react";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useState } from "react";

export const SignUp = () => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<Button variant="primary" onClick={handleShow}>
				Not a member yet? Sign up here for free!
			</Button>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title as="h3">We&apos;d love to have you!</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					Fill out the form below to join the community.
					<form className="row my-3">
						<label className="col-4 text-center my-3">First Name:</label>
						<div className="col-8  text-center mx-auto  justify-content-around">
							<input type="text" name="name" />
						</div>
						<label className="col-4 text-center my-3">Last Name:</label>
						<div className="col-8  text-center mx-auto  justify-content-around">
							<input type="text" name="name" />
						</div>
						<label className="col-4 text-center my-3">User Name:</label>
						<div className="col-8  text-center mx-auto  justify-content-around">
							<input type="text" name="name" />
						</div>
						<label className="col-4 text-center my-1">Create Password:</label>
						<div className="col-8 text-center  justify-content-around">
							<input type="password" name="password" />
						</div>
						<label className="col-4 text-center my-1">Confirm Password:</label>
						<div className="col-8 text-center  justify-content-around">
							<input type="password" name="password" />
						</div>
					</form>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
					<Button variant="primary" onClick={handleClose}>
						Sign up
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
	render(<SignUp />);
};
