import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { Col, Container, Row } from 'reactstrap';
import { formatTimer } from '../../../helpers';
import InfoCard from '../cards/info-card';

function GameFooter({ data, timer }) {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return (
    <footer className="pb-5">
      <Container>
        {data?.players?.length === 1
          ? (
            <Row className="d-flex justify-content-center">
              <Col xs={6} md={3}>
                <InfoCard title="Time" value={formatTimer(timer)} />
              </Col>
              <Col xs={6} md={3}>
                <InfoCard title="Moves" value={data?.players[data?.activePlayer].moves} />
              </Col>
            </Row>
          ) : (
            <Row className="d-flex justify-content-center">
              {data?.players?.map((player) => {
                return (
                  <Col xs={3} key={player.id}>
                    <InfoCard
                      title={isMobile ? `P${player.id + 1}` : `Player ${player.id + 1}`}
                      value={player.points}
                      isActive={player.id === data?.activePlayer}
                    />
                    {player.id === data?.activePlayer && !isMobile
                  && <p className="mb-0 mt-3 text-dark-blue text-uppercase fw-bold text-center">Current turn</p>}
                  </Col>
                );
              })}
            </Row>
          )}
      </Container>
    </footer>
  );
}

export default GameFooter;
