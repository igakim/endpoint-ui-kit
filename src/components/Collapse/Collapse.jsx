import styles from './Collapse.module.scss';
import CollapseContainer from './CollapseContainer.jsx';
import CollapseBody from './CollapseBody.jsx';

/**
 * @typedef {Object} Item
 * @property {number} key
 * @property {string} title
 * @property {string} body
 */

/**
 * @typedef {Object} CollapseProps
 * @property {Item[]} items
 * @property {number[]} defaultActiveKey
 * @property {(key: number) => void} [onClick]
 */
const Collapse = ({

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
          <CollapseContainer
            key={i.key}
            onClick={onClick(i.key)}
            title={i.title}
            isActive={isActive(i.key)}
          >
            <CollapseBody content={i.content} isActive={isActive(i.key)} />
          </CollapseContainer>
        );
      })}
    </div>
  );
};
export default Collapse;
