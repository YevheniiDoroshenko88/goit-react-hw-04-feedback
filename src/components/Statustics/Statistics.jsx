import React from 'react';
import PropTypes from 'prop-types';
import { StatisticsP, StatisticsDiv } from './statistics.styled.jsx';

export function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <StatisticsDiv>
      <StatisticsP>good:{good}</StatisticsP>
      <StatisticsP>neutral:{neutral}</StatisticsP>
      <StatisticsP>bad:{bad}</StatisticsP>
      <StatisticsP>total:{total}</StatisticsP>
      <StatisticsP>positive feedback:{positivePercentage}%</StatisticsP>
    </StatisticsDiv>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
