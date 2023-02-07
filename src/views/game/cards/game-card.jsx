import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { mapIcons } from '../../../helpers';

function GameCard({
  id, value, status, handleFlip, iconType,
}) {
  const settings = useSelector((state) => state.settings);

  const cardContent = useMemo(() => {
    if (!status) return null;

    if (status) {
      if (iconType === 'icons') {
        return <FontAwesomeIcon icon={mapIcons[value]} />;
      }
      return <p className="text-white mb-0">{value}</p>;
    }
    return null;
  }, [status, iconType, value]);
  return (
    <div
      onClick={() => handleFlip(id)}
      className={classNames('card', {
        'is-active': status === 'active',
        'is-visible': status === 'visible',
      })}
    >
      <div className="card-inner">
        <div className="front" />
        <div
          className={classNames(
            'back',
            settings.gridSize === '6x6' ? 'small' : 'large',
          )}
        >
          {cardContent}
        </div>
      </div>
    </div>
  );
}

export default GameCard;
