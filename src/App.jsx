import './App.css'
import Button from './components/Button';
import styles from './App.module.scss';


function App() {

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
    </div>
  )
}

export default App
