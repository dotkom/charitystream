import YouTube from "react-youtube";
import styles from "./Stream.module.css";

const Stream = ({ streamId }) => {
  const videoOpts = {
    playerVars: {
      autoplay: 1,
      playsinline: 1,
    },
  };
  return (
    <div className={styles.youtubeWrapper}>
      <YouTube
        containerClassName={styles.youtube}
        videoId={streamId}
        opts={videoOpts}
        className={styles.youtubeActual}
      />
    </div>
  );
};

export default Stream;
