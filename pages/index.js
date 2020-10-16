import useSWR from "swr";
import StretchGoals from "../components/StretchGoals";
import SilentAuction from "../components/SilentAuction";
import Vips from "../components/Vips";
import styles from "../frontpage.module.css";
import Stream from "../components/Stream";
import Chat from "../components/Chat";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Index() {
  const { data, error } = useSWR("/api/state", fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <>
      <div className={styles.parent + " h-screen"}>
        <div className={styles.stream + " " + styles.pane + " text-lg"}>
          <Stream streamId={data.streamLink} />
        </div>
        <div className={styles.chat + " " + styles.pane}>
          <Chat slidoView={data.slidoView} />
        </div>
        <div className={styles.beer + " " + styles.pane}>
          <Vips items={data.vips} />
        </div>
        <div className={styles.stretch + " " + styles.pane}>
          <StretchGoals />
        </div>
        <div className={styles.vipps + " " + styles.pane}>
          <SilentAuction items={data.auctions} />
        </div>
      </div>
    </>
  );
}
