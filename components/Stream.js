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
        {/*
        <div style={{ width: "100%" }}>
          <iframe
            src="https://www.youtube.com/live_chat?v=DdM2dUG7Iiw&embed_domain=localhost"
            width="100%"
            height="600"
            frameBorder="0"
          ></iframe>
        </div>*/}
        <div style={{ width: "100%" }}>
          <iframe
            src="https://app.sli.do/event/xf2tgxre"
            height="100%"
            width="100%"
            frameborder="0"
            style={{ "min-height": "560px" }}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

