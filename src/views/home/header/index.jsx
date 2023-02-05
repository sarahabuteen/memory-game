import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import Logo from '../../../components/logo';

function Header() {
  return (
    <header className="pb-5">
      <Container>
        <Row>
          <Col md={12} className="d-flex align-items-center justify-content-center">
            <Logo color="#FFFFFF" />
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
