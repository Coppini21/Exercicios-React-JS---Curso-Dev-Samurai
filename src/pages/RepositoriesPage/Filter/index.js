import React from 'react';
import PropTypes from 'prop-types';

import { Container, Selector, Cleaner } from './styles';

function Filter({ languagens, currentLanguage, onClick }) {
  return (
    <div>
      <Container>
        {languagens.map((lang) => (
          <Selector
            key={lang.name.toLowerCase()}
            color={lang.color}
            className={currentLanguage === lang.name ? 'selected' : ''}
            onClick={() => onClick && onClick(lang.name)}
          >
            <span>{lang.name}</span>
            <span>{lang.count}</span>
          </Selector>
        ))}
        <Cleaner onClick={() => onClick && onClick(undefined)}>Limpar</Cleaner>
      </Container>
    </div>
  );
}

Filter.defaultProps = {
  currentLanguage: null,
  onClick: null,
};

Filter.propTypes = {
  languagens: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      count: PropTypes.number.isRequired,
      color: PropTypes.string,
    }).isRequired
  ).isRequired,
  currentLanguage: PropTypes.string,
  onClick: PropTypes.func,
};

export default Filter;
