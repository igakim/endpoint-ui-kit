import styles from './Collapse.module.scss';
import CollapseTitle from './CollapseTitle.jsx';
import CollapseBody from './CollapseBody.jsx';

const Collapse = ({
  /**
   * @typedef {Object} items
   * @property {number} key
   * @property {string} title
   * @property {string} body
   */
  items = [],
  defaultActiveKey = [],
  onClick,
}) => {
  const isActive = (key) => {
    return defaultActiveKey.includes(key);
  };
  return (
    <div className={styles.collapse}>
      {items.map((i) => {
        return (
          <CollapseTitle
            key={i.key}
            onClick={onClick(i.key)}
            title={i.title}
            isActive={isActive(i.key)}
          >
            <CollapseBody content={i.content} isActive={isActive(i.key)} />
          </CollapseTitle>
        );
      })}
    </div>
  );
};
export default Collapse;
