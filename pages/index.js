import useSWR from 'swr'
import StretchGoals from '../components/StretchGoals'
import styles from '../frontpage.module.css'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Index() {

  return (
    <div className={styles.parent}>
      <div className={styles.stream + " " + styles.pane + ' text-lg'}><p className='text-center'>Hehe</p></div>
      <div className={styles.chat + " " + styles.pane}>Chat</div>
      <div className={styles.beer + " " + styles.pane}>Beer</div>
      <div className={styles.stretch + " " + styles.pane}><StretchGoals/></div>
      <div className={styles.vipps + " " + styles.pane}>Vipps</div>
    </div>
  );
}
