import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import options from '../data';
import Option from '../option';

function Options() {
  return (
    <section className="w-35 pt-3">
      <Container>
        <div className="light-silver-bg border-radius-20 w-100 p-md-5 p-4">
          <Option
            title="Select Theme"
            colSize={6}
            data={options.themes}
            optionTitle="theme"
          />
          <Option
            title="Numbers of Players"
            colSize={3}
            data={options.numberOfPlayers}
            optionTitle="numberOfPlayers"
          />
          <Option
            title="Grid Size"
            colSize={6}
            data={options.gridSizes}
            optionTitle="gridSize"
          />
          <Row>
            <Col md={12}>
              <Link to="/game" className="btn btn-orange w-100">Start Game</Link>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
}

export default Options;
