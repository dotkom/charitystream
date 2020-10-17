const Chat = ({ slidoView }) => {
  const questions = slidoView == "questions";
  return (
    <div>
      <div style={{ width: "100%", display: questions ? "block" : "none" }}>
        <iframe
          src={`https://app.sli.do/event/gyvsokri/live/questions`}
          height="600px"
          width="100%"
          frameBorder="0"
          style={{ minHeight: "600px", minWidth: "300px" }}
        ></iframe>
      </div>
      <div style={{ width: "100%", display: questions ? "none" : "block" }}>
        <iframe
          src={`https://app.sli.do/event/gyvsokri/live/polls`}
          height="600px"
          width="100%"
          frameBorder="0"
          style={{ minHeight: "600px", minWidth: "300px" }}
        ></iframe>
      </div>
    </div>
  );
};

export default Chat;
