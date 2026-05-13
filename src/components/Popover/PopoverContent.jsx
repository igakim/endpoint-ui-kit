import styles from './Popover.module.scss';
import cn from 'classnames';

const PopoverContent = ({ title, onClick }) => {
  const containerClass = cn({
    [styles.popoverItems]: true,
  });
  return (
    <div className={containerClass} onClick={onClick}>
      {title}
    </div>
  );
};

export default PopoverContent;
