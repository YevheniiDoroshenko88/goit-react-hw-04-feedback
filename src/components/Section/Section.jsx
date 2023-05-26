import React from 'react';
import PropTypes from 'prop-types';
import { SectionBox, SectionTitle } from './Section.styled.jsx';

export function Section({ children, title }) {
  return (
    <SectionBox>
      {title && <SectionTitle>{title}</SectionTitle>}
      {children}
    </SectionBox>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};
