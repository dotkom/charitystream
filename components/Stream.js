const Stream = () => {
  return (
    <div>
      <div style={{ display: "flex" }}>
        <div style={{ flex: "0 1 auto" }}>
          <iframe
            width="800"
            height="500"
            src="https://www.youtube.com/embed/DdM2dUG7Iiw?autoplay=1"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Stream;
