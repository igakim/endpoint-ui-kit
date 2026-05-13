import styles from './Collapse.module.scss';
import cn from 'classnames';
import { AiOutlineRight as Right } from 'react-icons/ai';
import { AiOutlineDown as Down } from 'react-icons/ai';

const CollapseTitle = ({ title, children, isActive, onClick, index, itemsLength }) => {
  const divClassName = cn({
    [styles.collapseTitleContent]: true,
    [styles.last]: index === itemsLength - 1,
    [styles.active]: isActive 
  });
  const Ico = isActive ? Down : Right;
  return (
    <div>
      <div className={divClassName} onClick={onClick}>
        <p>{title}</p>
        <Ico />
      </div>
      {children}
    </div>
  );
};

export default CollapseTitle;
