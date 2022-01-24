import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container, Row, Col, Button, Card, ListGroup } from "react-bootstrap";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: {},
      isLoaded: false,
    };
  }

  componentDidMount() {
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          isLoaded: true,
          items: json,
        });
      });
  }

  fetchNewUser = () => {
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          isLoaded: true,
          items: json,
        });
      });
  }

  render() {
    let { items, isLoaded } = this.state;

    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="App">
          <Container centered>
        
            <Card>
              <Row>
                <Col className="one" md={5} sm={12}>
                  <Card.Img className="card-img"
                    src={items.results[0].picture.large}
                  />
                </Col>
                <Col>
                  <Card.Body>
                    <Card.Title>
                      <h2>{items.results[0].name.title}{" "}
                      {items.results[0].name.first} {items.results[0].name.last}</h2>
                    </Card.Title>
                    <Card.Text>
                      <Row>
                        <h3>About</h3>
                        <ListGroup variant="flush">
                          <ListGroup.Item>Gender : {items.results[0].gender}</ListGroup.Item>
                          <ListGroup.Item>Age : {items.results[0].dob.age} years</ListGroup.Item>
                          <ListGroup.Item>Nationality : {items.results[0].nat}</ListGroup.Item>
                          <ListGroup.Item>Address : {items.results[0].location.street.number}, {items.results[0].location.street.name}</ListGroup.Item>
                          <ListGroup.Item>City : {items.results[0].location.city}, {items.results[0].location.state}, {items.results[0].location.country}</ListGroup.Item>
                          <ListGroup.Item>Membership Duration : {items.results[0].registered.age} years</ListGroup.Item>
                        </ListGroup>
                      </Row>
                      <Row>
                        <h3>Contact</h3>
                        <ListGroup variant="flush">
                          <ListGroup.Item>Cell : {items.results[0].cell}</ListGroup.Item>
                          <ListGroup.Item>Phone : {items.results[0].phone}</ListGroup.Item>
                          <ListGroup.Item>Email : {items.results[0].email}</ListGroup.Item>
                        </ListGroup>
                      </Row>
                    </Card.Text>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
           <Row className="ubtn">
            <Button variant="primary" onClick={this.fetchNewUser}>Update</Button>
          </Row>
          </Container>
        </div>
      );
    }
  }
}

export default App;
