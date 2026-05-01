import React from 'react';
import cn from 'classnames';
import styles from './Button.module.scss';
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Button = ({
  type = 'button',
  iconPosition = 'right',
  onClick,
  text = '',
  isDisabled = false,
  variant = 'primary',
  isLoading = false,
  loadingText = null,
  block = false,
  size = false,
  icon = null,
  onlyIcon = false,
}) => {
  const buttonStyles = cn({
    [styles.button]: true,
    [styles.buttonPrimary]: variant === 'primary',
    [styles.buttonSecondary]: variant === 'secondary',
    [styles.block]: block,
    [styles.sized]: size,
    [styles.onlyIcon]: onlyIcon,
  });
  const iconStyle = cn({
    [styles.icon]: true,
    [styles.Loading]: isLoading,    
    [styles.iconPositionRight]: iconPosition === 'right',
    [styles.iconPositionLeft]: iconPosition === 'left',
    [styles.onlyIcon]: onlyIcon 
  })
  const Icon = icon
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isDisabled || isLoading}
      className={buttonStyles}
      style={{
              width: size.width,
              height: size.height
      }}
    >
      {icon && iconPosition === 'left' && <Icon className={iconStyle}/>} 
      <span>{loadingText || text}</span> 
      {icon && iconPosition === 'right' && <Icon className={iconStyle}/>} 
      {isLoading &&  <AiOutlineLoading3Quarters className={iconStyle} />}
     </button>
  );
};

export default Button;
