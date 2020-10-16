import useSWR from 'swr'
import StretchGoals from '../components/StretchGoals'
import SilentAuction from '../components/SilentAuction'
import Vips from '../components/Vips'
import styles from '../frontpage.module.css'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Index() {

  const { data, error } = useSWR('/api/state', fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  return (
    <>
    <div className={styles.parent + " h-screen"}>
      <div className={styles.stream + " " + styles.pane + ' text-lg'}><p className='text-center'>Hehe</p></div>
      <div className={styles.chat + " " + styles.pane}>Chat</div>
      <div className={styles.beer + " " + styles.pane}>Beer</div>
      <div className={styles.stretch + " " + styles.pane}><StretchGoals/></div>
      <div className={styles.vipps + " " + styles.pane}><Vips items={data.vips} /></div>
    </div>
    <div className={styles.auction}>
      <SilentAuction items={data.auctions} />
    </div>
    </>
  );
}
