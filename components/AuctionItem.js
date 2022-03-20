const AuctionItem = (props) => {
  return (
    <div
      className="w-48 rounded overflow-hidden shadow-lg m-5 text-center px-3 py-2 cursor-pointer hover:bg-gray-600 bg-gray-800"
      onClick={props.onClick}
      style={{ background: "#f9b759" }}
    >
      <div className="text-black font-bold text-2xl mb-2">{props.title}</div>
      <div className="text-black font-bold text-2xl mb-2">{props.price},-</div>
      <span className="text-black text-base mt-4 mb-4">
        <i>Høyeste budgiver: </i>
        {props.name}
      </span>
      <hr />
      <p className="text-black text-base mt-4 mb-4">{props.description}</p>
    </div>
  );
};

export default AuctionItem;
