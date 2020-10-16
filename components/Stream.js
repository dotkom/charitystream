import YouTube from "react-youtube";
import styles from "./Stream.module.css";

const Stream = ({ streamId }) => {
  const videoOpts = {
    playerVars: {
      autoplay: 1,
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
      {/*     <iframe
            width="800"
            height="500"
            src={`https://www.youtube.com/embed/${streamId}?autoplay=1`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>*/}
    </div>
  );
};

export default Stream;
