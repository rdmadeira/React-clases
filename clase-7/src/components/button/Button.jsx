import React from 'react';
import styles from './Button.module.css';

// otherProps pasa todos los props atributos del componente que lo declara (linea 11) al componente Button
const Button = ({ children, inverted, ...otherProps }) => {
  return (
    // eslint-disable-next-line no-undef
    <button
      // eslint-disable-next-line no-undef
      className={`${inverted ? styles.inverted : ''} ${styles.custom_button}`}
      {...otherProps}>
      {children}
    </button>
  );
};

export default Button;
