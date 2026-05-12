import cn from 'classnames';
import styles from './Popover.module.scss';
import { useEffect, useRef, useState } from 'react';

const calculatePosition = (dimensions) => {
  const offset = 8;
  const axisY =
    dimensions.button.bottom +
    offset +
    dimensions.menu.height -
    dimensions.screen.height;
  const axisX =
    dimensions.button.right +
    offset +
    dimensions.menu.width -
    dimensions.screen.width;
  const positionY =
    axisY < 0
      ? dimensions.button.height + offset
      : -(offset + dimensions.menu.height);
  const positionX = axisX < 0 ? offset : -(dimensions.menu.width - offset);

  return {
    positionX,
    positionY,
  };
};

const PopoverContainer = ({
  children,
  Ico,
  variant,
  isActive,
  toggleActive,
  closeOnClick,
  size,
}) => {
  const [position, setPosition] = useState({ positionX: 0, positionY: 0 });
  const refElList = useRef(null);
  const refElButton = useRef(null);

  useEffect(() => {
    if (!isActive) {
      return;
    }
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    if (refElList.current && refElButton.current) {
      const {
        width: buttonWidth,
        height: buttonHeight,
        bottom: buttonBottom,
        right: buttonRight,
      } = refElButton.current.getBoundingClientRect();

      const heightEl = refElList.current.parentElement.scrollHeight;
      const widthEl = refElList.current.parentElement.scrollWidth;
      const currentDimensions = {
        menu: {
          height: heightEl,
          width: widthEl,
        },
        screen: {
          width: screenWidth,
          height: screenHeight,
        },
        button: {
          bottom: buttonBottom,
          right: buttonRight,
          width: buttonWidth,
          height: buttonHeight,
        },
      };
      const currentPosition = calculatePosition(currentDimensions);
      setPosition(currentPosition);
    }

    const outSideClick = (e) => {
      if (
        closeOnClick &&
        refElList.current &&
        refElButton.current &&
        !refElList.current.contains(e.target) &&
        !refElButton.current.contains(e.target)
      ) {
        toggleActive();
      }
    };

    document.addEventListener('click', outSideClick);

    return () => {
      document.removeEventListener('click', outSideClick);
    };
  }, [isActive]);

  const buttonClass = cn({
    [styles.popoverButton]: true,
    [styles.popoverButtonPrimary]: variant === 'primary',
    [styles.popoverButtonSecondary]: variant === 'secondary',
    [styles.popoverButtonSmall]: size === 'sm',
    [styles.popoverButtonLarge]: size === 'lg',
  });
  const classContainer = cn({
    [styles.popoverContainer]: true,
  });
  return (
    <div className={styles.parentContainer}>
      <button
        type="button"
        className={buttonClass}
        onClick={toggleActive}
        ref={refElButton}
      >
        <Ico className={styles.icon} />
      </button>
      {
        <div
          className={classContainer}
          style={{
            transform: isActive ? 'scaleY(1)' : 'scaleY(0)',
            transformOrigin: position.positionY > 0 ? 'top' : 'bottom',
            opacity: isActive ? 1 : 0,
            transition: 'transform 0.5s ease, opacity 0.5s ease',
            pointerEvents: isActive ? 'auto' : 'none',
            position: 'absolute',
            top: position.positionY,
            left: position.positionX,
          }}
        >
          <div ref={refElList}>{children} </div>
        </div>
      }
    </div>
  );
};

export default PopoverContainer;
