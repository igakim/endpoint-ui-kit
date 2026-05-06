import styles from './Collapse.module.scss';
import cn from 'classnames';
import { AiOutlineRight as Right } from 'react-icons/ai';
import { AiOutlineDown as Down } from 'react-icons/ai';

const CollapseTitle = ({ title, children, isActive, onClick }) => {
  const divClassName = cn({
    [styles.collapseTitleContent]: true,
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
