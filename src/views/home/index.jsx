import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import Logo from '../../components/logo';
import { getGameSettings } from '../../redux/actions/settings.actions';
import options from './data';
import Option from './option';

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGameSettings());
  }, []);
  return (
    <main className="dark-bg h-100 d-flex flex-column justify-content-center align-items-center">
      <header className="pb-5">
        <Container>
          <Row>
            <Col md={12} className="d-flex align-items-center justify-content-center">
              <Logo color="#FFFFFF" />
            </Col>
          </Row>
        </Container>
      </header>
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
    </main>
  );
}

export default Home;
