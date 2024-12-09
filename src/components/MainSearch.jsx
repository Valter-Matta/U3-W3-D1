import { useState } from "react";
import {
	Container,
	Row,
	Col,
	Form,
	ListGroupItem,
	ListGroup,
} from "react-bootstrap";
import Job from "./Job";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

const MainSearch = () => {
	const [query, setQuery] = useState("");
	const [jobs, setJobs] = useState([]);

	const favouriteArray = useSelector(reduxState => {
		return reduxState.work.favourite;
	});

	const baseEndpoint =
		"https://strive-benchmark.herokuapp.com/api/jobs?search=";

	const handleChange = e => {
		setQuery(e.target.value);
	};

	const handleSubmit = async e => {
		e.preventDefault();

		try {
			const response = await fetch(baseEndpoint + query + "&limit=20");
			if (response.ok) {
				const { data } = await response.json();
				setJobs(data);
			} else {
				alert("Error fetching results");
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<Container>
			<Row>
				<Col
					xs={10}
					className="mx-auto my-3 d-flex justify-content-between align-items-center"
				>
					<h1 className="display-1">Remote Jobs Search</h1>
					<Link to="/favourite">
						<ListGroup>
							<ListGroupItem className="text-white bg-success px-2 d-flex justify-content-between align-items-center ">
								<FaHeart className="fs-4 mx-2" />
								<p className="m-0 px-2 fs-3">{favouriteArray.length}</p>
							</ListGroupItem>
						</ListGroup>
					</Link>
				</Col>
				<Col xs={10} className="mx-auto">
					<Form onSubmit={handleSubmit}>
						<Form.Control
							type="search"
							value={query}
							onChange={handleChange}
							placeholder="type and press Enter"
						/>
					</Form>
				</Col>
				<Col xs={10} className="mx-auto mb-5">
					{jobs.map(jobData => (
						<Job key={jobData._id} data={jobData} />
					))}
				</Col>
			</Row>
		</Container>
	);
};

export default MainSearch;
