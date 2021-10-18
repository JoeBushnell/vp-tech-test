import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import "./CityCard.css";

function CityCard({ city, location, measurements }) {
  return (
    <container>
      <Card>
        <Card.Body className="title">
          <Card.Title>{location}</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          {measurements && (
            <div>
              {measurements?.map((measurements) => (
                <ListGroupItem>
                  {measurements.parameter}: {measurements.value}{" "}
                  {measurements.unit}
                </ListGroupItem>
              ))}
            </div>
          )}
        </ListGroup>
      </Card>
    </container>
  );
}

export default CityCard;
