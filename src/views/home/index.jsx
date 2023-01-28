import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import Logo from '../../components/logo';

function Home() {
  return (
    <main className="dark-bg h-100 d-flex flex-column justify-content-center align-items-center">
      <section className="pb-5">
        <Container>
          <Row>
            <Col md={12} className="d-flex align-items-center justify-content-center">
              <Logo color="#FFFFFF" />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="w-35 pt-3">
        <Container>
          <div className="light-silver-bg border-radius-20 w-100 p-md-5 p-4">
            <Row className="mb-4">
              <Col md={12}>
                <h6 className="text-light-navy fw-bold pb-1">Select Theme</h6>
              </Col>
              <Col xs={6}>
                <button type="button" className="btn btn-light w-100">Numbers</button>
              </Col>
              <Col xs={6}>
                <button type="button" className="btn btn-light w-100">Icons</button>
              </Col>
            </Row>
            <Row className="mb-4">
              <Col md={12}>
                <h6 className="text-light-navy fw-bold pb-1">Numbers of Players</h6>
              </Col>
              <Col xs={3}>
                <button type="button" className="btn btn-light w-100">1</button>
              </Col>
              <Col xs={3}>
                <button type="button" className="btn btn-light w-100">2</button>
              </Col>
              <Col xs={3}>
                <button type="button" className="btn btn-light w-100">3</button>
              </Col>
              <Col xs={3}>
                <button type="button" className="btn btn-light w-100">4</button>
              </Col>
            </Row>
            <Row className="mb-4">
              <Col md={12}>
                <h6 className="text-light-navy fw-bold pb-1">Grid Size</h6>
              </Col>
              <Col xs={6}>
                <button type="button" className="btn btn-light w-100">4x4</button>
              </Col>
              <Col xs={6}>
                <button type="button" className="btn btn-light w-100">6x6</button>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <button type="button" className="btn btn-orange w-100">Start Game</button>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </main>
  );
}

export default Home;
