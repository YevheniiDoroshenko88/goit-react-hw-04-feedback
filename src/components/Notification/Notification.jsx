import React from 'react';
import PropTypes from 'prop-types';
import { NotificationP } from './Notification.styled.jsx';

export function Notification({ message }) {
  return <NotificationP>{message}</NotificationP>;
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
