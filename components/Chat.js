const Chat = ({ slidoView }) => {
  const questions = slidoView == "questions";
  return (
    <div>
      <div style={{ width: "100%", display: questions ? "block" : "none" }}>
        <iframe
          src={`https://app.sli.do/event/xf2tgxre/live/questions`}
          height="100%"
          width="100%"
          frameborder="0"
          style={{ "min-height": "560px", marginTop: "-100px" }}
        ></iframe>
      </div>
      <div style={{ width: "100%", display: questions ? "none" : "block" }}>
        <iframe
          src={`https://app.sli.do/event/xf2tgxre/live/polls`}
          height="100%"
          width="100%"
          frameborder="0"
          style={{ "min-height": "600px", marginTop: "-100px" }}
        ></iframe>
      </div>
    </div>
  );
};

export default Chat;
