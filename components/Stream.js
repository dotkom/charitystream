import YouTube from "react-youtube";

const Stream = ({ streamId }) => {
  const videoOpts = {
    playerVars: {
      autoplay: 1,
    },
  };
  return (
    <div>
      <YouTube videoId={streamId} opts={videoOpts} />
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
