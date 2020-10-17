import useSWR from "swr";
import dynamic from "next/dynamic";
import StretchGoals from "../components/StretchGoals";
import SilentAuction from "../components/SilentAuction";
import Vipps from "../components/Vipps";
import styles from "../frontpage.module.css";
import Stream from "../components/Stream";
import Chat from "../components/Chat";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Index() {
  const { data, error } = useSWR("/api/state", fetcher, {
    refreshInterval: 5000,
  });

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  console.log(data);

  return (
    <>
      <div className={styles.parent + " h-screen"}>
        <div className={styles.stream + " " + styles.pane + " text-lg"}>
          <Stream streamId={data.streamLink.link} />
        </div>
        <div className={styles.chat + " " + styles.pane}>
          <Chat slidoView={data.slidoView.type} />
        </div>
        <div className={styles.vipps + " " + styles.pane}>
          <Vipps items={data.vipps} topDonor={data.topDonor} />
        </div>
        <div className={styles.stretch + " " + styles.pane}>
          <StretchGoals stretchGoals={data.stretchGoals} saldo={data.saldo} />
        </div>
        <div className={styles.auction + " " + styles.pane}>
          <SilentAuction items={data.auctions} />
        </div>
      </div>
    </>
  );
}
