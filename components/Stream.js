import YouTube from "react-youtube";
import styles from "./Stream.module.css";

const Stream = (props) => {
  const videoOpts = {
    playerVars: {
      autoplay: 1,
      playsinline: 1,
    },
  };

  console.log(props);

  return (
    <div className={styles.youtubeWrapper}>
      <YouTube
        containerClassName={styles.youtube}
        videoId={props.link.link}
        opts={videoOpts}
        className={styles.youtubeActual}
      />
    </div>
  );
};

export default Stream;
