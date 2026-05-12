import './App.css';
import Button from './components/Button';
import styles from './App.module.scss';
import Modal from './components/Modal/index.js';
import Collapse from './components/Collapse';
import Popover from './components/Popover'
import { AiOutlineSelect } from 'react-icons/ai';
import { useState } from 'react';

function App() {
  const [modals, setModals] = useState({
    simpleOpen: false,
  });
  const [collapse, setCollapse] = useState([1]);
  const onClickCollapse = (key) => () => {
    collapse.includes(key)
      ? setCollapse(collapse.filter((c) => c !== key))
      : setCollapse([...collapse, key]);
  };
  return (
    <div className={styles.container}>
      <h2>Buttons</h2>
      <div className={styles.section}>
        <div className={styles.singleButton}>
          <Button onClick={() => console.log('Clicked123')} text="Primary" />
        </div>
        <div className={styles.singleButton}>
          <Button
            onClick={() => console.log('Clicked1')}
            text="Secondary"
            variant="secondary"
          />
        </div>
        <div className={styles.singleButton}>
          <Button
            onClick={() => console.log('Clicked2')}
            text="Disabled"
            isDisabled={true}
          />
        </div>
        <div className={styles.singleButton}>
          <Button
            onClick={() => console.log('Clicked3')}
            text="Text"
            isLoading={true}
          />
        </div>
        <div className={styles.singleButton}>
          <Button
            onClick={() => console.log('Clicked4')}
            text="Normal"
            isLoading={true}
            loadingText="Loading"
          />
        </div>
        <div className={`${styles.singleButton} ${styles.block}`}>
          <Button
            onClick={() => console.log('Clicked5')}
            text="Block"
            variant="secondary"
            block={true}
          />
        </div>
        <div className={styles.singleButton}>
          <Button
            onClick={() => console.log('Clicked6')}
            text="Icon"
            variant="secondary"
            icon={AiOutlineSelect}
          />
        </div>
        <div className={styles.singleButton}>
          <Button
            onClick={() => console.log('Clicked7')}
            text="Icon left"
            iconPosition="left"
            variant="secondary"
            icon={AiOutlineSelect}
          />
        </div>
        <div className={styles.singleButton}>
          <Button
            onClick={() => console.log('Clicked8')}
            text="Small"
            icon={AiOutlineSelect}
            size="sm"
            variant="secondary"
          />
        </div>
        <div className={styles.singleButton}>
          <Button
            onClick={() => console.log('Clicked9')}
            text="Default"
            icon={AiOutlineSelect}
            variant="secondary"
          />
        </div>
        <div className={styles.singleButton}>
          <Button
            onClick={() => console.log('Clicked10')}
            text="Large"
            icon={AiOutlineSelect}
            size="lg"
            variant="secondary"
          />
        </div>
        <div className={styles.singleButton}>
          <Button
            onClick={() => console.log('Clicked11')}
            text="Test"
            variant="secondary"
            icon={AiOutlineSelect}
            size="sm"
            onlyIcon={true}
          />
        </div>
        <div className={styles.singleButton}>
          <Button
            onClick={() => console.log('Clicked12')}
            text="Test"
            variant="secondary"
            icon={AiOutlineSelect}
            onlyIcon={true}
          />
        </div>
        <div className={styles.singleButton}>
          <Button
            onClick={() => console.log('Clicked13')}
            text="Test"
            variant="secondary"
            icon={AiOutlineSelect}
            size="lg"
            onlyIcon={true}
          />
        </div>
      </div>

      <div className={styles.section}>
        <button
          type="button"
          onClick={() => setModals({ ...modals, simpleOpen: true })}
        >
          Open modal
        </button>
        <Modal
          dismissible={false}
          isOpen={modals.simpleOpen}
          onClose={() => setModals({ ...modals, simpleOpen: false })}
        >
          <h2>Modal</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus in
            ipsa laboriosam sequi? Ab at dignissimos fugiat iusto laudantium
            maiores, modi molestias provident quibusdam quo, saepe soluta
            tempore totam voluptatum?
          </p>
          <div>
            <button type="button">Close</button>
            <button type="button">Ok</button>
          </div>
        </Modal>
      </div>

      <div className={styles.section}>
        <Collapse
          items={[
            {
              key: 1,
              title: 'Title1',
              content: 'body1',
            },
            {
              key: 2,
              title: 'Title2',
              content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderitLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderitLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderitLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderitLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderitLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderitLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            },
            {
              key: 3,
              title: 'Title3',
              content: 'body3',
            },
          ]}
          defaultActiveKey={collapse}
          onChange={() => console.log('changed')}
          onClick={onClickCollapse}
        />
      </div>

      <div className={styles.section}>
        <Popover
    variant='secondary'
    size='lg'
    onClick = {() => console.log('Item clicked')}
      items = {[
        {
          key: 1,
          title: 'item1',
        },
        {
          key: 2,
          title: 'item2',
        },
        {
          key: 3,
          title: 'item3',
        },
        {
          key: 4,
          title: 'item4',
        },
        {
          key: 5,
          title: 'item5',
        },
        {
          key: 6,
          title: 'item6',
        },
        {
          key: 7,
          title: 'item7',
        },
        {
          key: 8,
          title: 'item8',
        },
        {
          key: 9,
          title: 'item9',
        },
        {
          key: 10,
          title: 'item10',
        },
      ]}
    />
      </div>

    </div>
  );
}

export default App;
