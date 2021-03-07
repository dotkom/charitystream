const Chat = ({ video_id }) => {
  return (
    <div id="chat-embed-wrapper">
      <iframe
        height="600px"
        width="100%"
        referrerPolicy="origin"
        src={
          `https://www.youtube.com/live_chat?v=${video_id}&embed_domain=` +
          window.location.hostname
        }
        id="chat-embed"
      ></iframe>
    </div>
  );
};

export default Chat;
