import { EmojiHappy } from 'iconsax-react';
import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import Logo from '../../components/logo';

function Game() {
  return (
    <main className="light-silver-bg h-100 d-flex flex-column">
      <header className="pt-5">
        <Container>
          <Row>
            <Col md={6}>
              <Logo color="#152938" />
            </Col>
            <Col md={6} className="d-flex justify-content-end">
              <button type="button" className="btn btn-sm btn-orange me-2">Restart</button>
              <button type="button" className="btn btn-sm btn-light">New Game</button>
            </Col>
          </Row>
        </Container>
      </header>
      <section className="game-board">
        <Container>
          <Row>
            <Col md={12} className="d-flex justify-content-center align-items-center">
              <div className="cards-list">
                <div className="card">
                  <div className="card-face front" />
                  <div className="card-face back">
                    <EmojiHappy />
                  </div>
                </div>
                <div className="card" />
                <div className="card" />
                <div className="card" />

                <div className="card" />
                <div className="card" />
                <div className="card" />
                <div className="card" />

                <div className="card" />
                <div className="card" />
                <div className="card" />
                <div className="card" />

                <div className="card" />
                <div className="card" />
                <div className="card" />
                <div className="card" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <footer className="pb-5">
        <Container>
          <Row className="d-flex justify-content-center">
            <Col xs={6} md={3}>
              <div className="info-card d-flex align-items-center justify-content-between w-100">
                <h6 className="mb-0 text-light-navy fw-bold">Time</h6>
                <h3 className="mb-0 text-dark-navy fw-bold">0:01</h3>
              </div>
            </Col>
            <Col xs={6} md={3}>
              <div className="info-card d-flex align-items-center justify-content-between w-100">
                <h6 className="mb-0 text-light-navy fw-bold">Moves</h6>
                <h3 className="mb-0 text-dark-navy fw-bold">0</h3>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={3}>
              <div className="info-card is-active d-flex align-items-center justify-content-between w-100">
                <h6 className="mb-0 text-light-navy fw-bold">Player 1</h6>
                <h3 className="mb-0 text-dark-navy fw-bold">0</h3>
              </div>
              <p className="mb-0 mt-3 text-dark-blue text-uppercase fw-bold text-center">Current turn</p>
            </Col>
            <Col xs={3}>
              <div className="info-card d-flex align-items-center justify-content-between w-100">
                <h6 className="mb-0 text-light-navy fw-bold">Player 2</h6>
                <h3 className="mb-0 text-dark-navy fw-bold">0</h3>
              </div>
            </Col>
            <Col xs={3}>
              <div className="info-card d-flex align-items-center justify-content-between w-100">
                <h6 className="mb-0 text-light-navy fw-bold">Player 3</h6>
                <h3 className="mb-0 text-dark-navy fw-bold">0</h3>
              </div>
            </Col>
            <Col xs={3}>
              <div className="info-card d-flex align-items-center justify-content-between w-100">
                <h6 className="mb-0 text-light-navy fw-bold">Player 4</h6>
                <h3 className="mb-0 text-dark-navy fw-bold">0</h3>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </main>
  );
}

export default Game;
