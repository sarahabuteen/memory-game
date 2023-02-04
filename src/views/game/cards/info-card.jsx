import classNames from 'classnames';
import React from 'react';

function InfoCard({
  value, title, isActive, isHighlighted,
}) {
  return (
    <div className={classNames('info-card d-flex align-items-center justify-content-between w-100 mb-3', {
      'is-active': isActive,
      'is-highlighted': isHighlighted,
    })}
    >
      <h6 className="mb-0 text-light-navy fw-bold">{title}</h6>
      <h3 className="mb-0 text-dark-navy fw-bold">{value}</h3>
    </div>
  );
}

export default InfoCard;
