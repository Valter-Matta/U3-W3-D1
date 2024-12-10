import { Container, Row, Col, ListGroup, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeFromFavouriteAction } from "../redux/reducers/actions";

const Favourites = () => {
	const arrayOfFavourites = useSelector(reduxState => {
		return reduxState.favourite.work.favourite;
	});
	const dispatch = useDispatch();
	return (
		<Container>
			<Row>
				<Col className="my-3">
					<ListGroup>
						{arrayOfFavourites.map((work, i) => (
							<ListGroup.Item
								key={i}
								className="d-flex justify-content-between"
							>
								<Link to={`/${work.company_name}`}>{work.company_name}</Link>
								<span className="ms-auto pe-3 ">Posizione:</span>{" "}
								<span className="w-25">{work.title} </span>
								<Button
									variant="danger"
									onClick={() => {
										dispatch(removeFromFavouriteAction(i));
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
