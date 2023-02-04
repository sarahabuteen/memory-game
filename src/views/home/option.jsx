import classNames from 'classnames';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Row } from 'reactstrap';
import { setGameSettings } from '../../redux/actions/settings.actions';

function Option({
  title, colSize, data, optionTitle,
}) {
  const settings = useSelector((state) => state.settings);
  const dispatch = useDispatch();

  return (
    <Row className="mb-4">
      <Col md={12}>
        <h6 className="text-light-navy fw-bold pb-1">{title}</h6>
      </Col>
      {data?.map((item) => {
        return (
          <Col xs={colSize} key={item}>
            <button
              type="button"
              className={classNames('btn btn-light text-capitalize w-100', settings[optionTitle] === item ? 'is-active' : '')}
              onClick={() => dispatch(setGameSettings(optionTitle, item))}
            >
              {item}
            </button>
          </Col>
        );
      })}
    </Row>
  );
}

export default Option;
