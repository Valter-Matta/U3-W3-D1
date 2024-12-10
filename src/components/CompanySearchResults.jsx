import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Job from "./Job";
import { useParams } from "react-router-dom";
import { ReactReduxContext, useDispatch, useSelector } from "react-redux";
import { GET_PARAMS } from "../redux/reducers/actions";

const CompanySearchResults = () => {
	const params = useParams();
	const ArrayWork = useSelector(reduxState => {
		return reduxState.favourite.work.favourite;
	});

	return (
		<Container>
			<Row>
				<Col className="my-3">
					<h1 className="display-4">Job posting for: {params.company}</h1>{" "}
					{ArrayWork.map(jobData => (
						<Job key={jobData._id} data={jobData} />
					))}
				</Col>
			</Row>
		</Container>
	);
};

export default CompanySearchResults;
