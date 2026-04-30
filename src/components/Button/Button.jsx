import React from 'react';
import cn from 'classnames';
import styles from './Button.module.scss';

const Button = ({
  type = 'button',
  onClick,
  text = '',
  variant = 'primary',
}) => {
  const buttonStyles = cn({
    [styles.button]: true,
    [styles.buttonPrimary]: variant === 'primary',
    [styles.buttonSecondary]: variant === 'secondary',
  });

  return (
    <button
      type={type}
      onClick={onClick}
      className={buttonStyles}
    >
      <span>{text}</span>
    </button>
  );
};

export default Button;