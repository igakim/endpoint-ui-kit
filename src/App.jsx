import './App.css'
import Button from './components/Button';
import styles from './App.module.scss';
import Modal from './components/Modal/index.js';
import { useState } from 'react';


function App() {
  const [modals, setModals] = useState({
    simpleOpen: false,
  });

  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <h2>Buttons</h2>
        <Button
          onClick={() => console.log('Clicked')}
          text="Hello"
        />
        <Button
          onClick={() => console.log('Clicked')}
          text="Hello"
          variant="secondary"
        />
      </div>

      <div className={styles.section}>
        <button type="button" onClick={() => setModals({ ...modals, simpleOpen: true })}>Open modal</button>
        <Modal
          dismissible={false}
          isOpen={modals.simpleOpen}
          onClose={() => setModals({ ...modals, simpleOpen: false })}
        >
          <h2>Modal</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus in ipsa laboriosam sequi? Ab at dignissimos fugiat iusto laudantium maiores, modi molestias provident quibusdam quo, saepe soluta tempore totam voluptatum?</p>
          <div>
            <button type="button">Close</button>
            <button type="button">Ok</button>
          </div>
        </Modal>
      </div>
    </div>
  )
}

export default App
