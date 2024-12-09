import { Container, Row, Col, ListGroup, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Favourites = () => {
	const arrayOfFavourites = useSelector(reduxState => {
		return reduxState.work.favourite;
	});
	const dispatch = useDispatch();
	return (
		<Container>
			<Row>
				<Col className="my-3">
					<ListGroup>
						{arrayOfFavourites.map((work, i) => (
							<ListGroup.Item className="d-flex justify-content-between">
								<Link key={i} to={`/${work.company_name}`}>
									{work.company_name}
								</Link>
								<span className="ms-auto pe-3 ">Posizione:</span>{" "}
								<span className="w-25">{work.title} </span>
								<Button
									variant="danger"
									onClick={() => {
										dispatch({
											type: "REMOVE_FROM_FAVOURITE",
											payload: i,
										});
									}}
								>
									Delete
								</Button>
							</ListGroup.Item>
						))}
					</ListGroup>
				</Col>
			</Row>
		</Container>
	);
};

export default Favourites;
