import useSWR from 'swr'
import Person from '../components/Person'
import styles from '../styles.module.css'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Index() {
  return (
    <div className={styles.parent}>
      <div className={styles.stream}>Stream</div>
      <div className={styles.chat}>Chat</div>
      <div className={styles.beer}>Beer</div>
      <div className={styles.stretch}>Stretchgoals</div>
      <div className={styles.vipps}>Vipps</div>
    </div>
  )
}
