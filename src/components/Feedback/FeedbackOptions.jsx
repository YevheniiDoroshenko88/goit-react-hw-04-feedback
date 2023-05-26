import React from 'react';
import PropTypes from 'prop-types';
import { FeedbackDiv, Button } from './FeedbackOptions.styled.jsx';

export function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <FeedbackDiv>
      {options.map(item => {
        return (
          <Button key={item} name={item} onClick={onLeaveFeedback}>
            {item}
          </Button>
        );
      })}
    </FeedbackDiv>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
