import './App.css'
import Button from './components/Button';
import styles from './App.module.scss';
import { AiOutlineSelect } from "react-icons/ai";


function App() {

  return (
    <div className={styles.container}>
        <h2>Buttons</h2>
      <div className={styles.section}>
          <div className={styles.singleButton}>
        <Button
          onClick={console.log('Clicked')}
          text="Primary"
        />
      </div>
          <div className={styles.singleButton}>
        <Button
          onClick={() => console.log('Clicked')}
          text="Secondary"
          variant="secondary"
        />
    </div>
          <div className={styles.singleButton}>
        <Button
          onClick={() => console.log('Clicked')}
          text="Disabled"
          isDisabled={true}
        />
    </div>
          <div className={styles.singleButton}>
        <Button
          onClick={() => console.log('Clicked')}
          text="Text"
          isLoading={true}
        />
    </div>
          <div className={styles.singleButton}>
        <Button
          onClick={() => console.log('Clicked')}
          text="Hello"
          isLoading={true}
          loadingText='Loading'
        />
    </div>
    <div className={`${styles.singleButton} ${styles.block}`}>
        <Button
          onClick={() => console.log('Clicked')}
          text="Block"
          variant="secondary"
          block={true}
        />
    </div>
    <div className={styles.singleButton}>
        <Button
          onClick={() => console.log('Clicked')}
          text="Sized 100x100"
          variant="secondary"
          size={{width: 100, height: 100}}
        />
    </div>
    <div className={styles.singleButton}>
        <Button
          onClick={() => console.log('Clicked')}
          text="configs"
          variant="secondary"
          icon={AiOutlineSelect}
        />
    </div>
    <div className={styles.singleButton}>
        <Button
          onClick={() => console.log('Clicked')}
          text="logo"
          iconPosition='left'
          variant="secondary"
          icon={AiOutlineSelect}
        />
    </div>
    <div className={styles.singleButton}>
        <Button
          onClick={() => console.log('Clicked')}
          text='Test'
          variant="secondary"
          icon={AiOutlineSelect}
          onlyIcon={true}
        />
    </div>
      </div>
    </div>
  )
}

export default App
