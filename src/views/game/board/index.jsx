import classNames from 'classnames';
import React from 'react';
import { useSelector } from 'react-redux';
import { Col, Container, Row } from 'reactstrap';
import GameCard from '../cards/game-card';

function GameBoard({ board, handleFlip }) {
  const settings = useSelector((state) => state.settings);

  return (
    <section className="game-board">
      <Container>
        <Row>
          <Col md={12} className="d-flex justify-content-center align-items-center">
            <div className={classNames('cards-list', settings?.gridSize === '4x4' ? 'four-grid' : 'six-grid')}>
              {board.map((card) => (
                <GameCard
                  iconType={settings.theme}
                  key={card.id}
                  id={card.id}
                  value={card.value}
                  status={card.status}
                  handleFlip={handleFlip}
                />
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default GameBoard;
