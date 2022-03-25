const AuctionItem = (props) => {
  return (
    <div
      className=" rounded overflow-hidden shadow-lg m-2 text-center px-3 py-2 cursor-pointer hover:bg-gray-600 bg-gray-800"
      onClick={props.onClick}
      style={{ background: "#2A9D8F", width: "20rem" }}
    >
      <div className="text-darkblue  font-bold text-2xl mb-2">
        {props.title}
      </div>
      <div className="text-darkblue font-bold text-2xl mb-2">
        {props.price},-
      </div>
      <span className="text-beige text-base mt-4 mb-4 text-2xl">
        <i>Høyeste budgiver: </i>
        {props.name}
      </span>
      <hr />
      <p className="text-black text-base mt-4 mb-4 text-2xl">
        {props.description}
      </p>
    </div>
  );
};

export default AuctionItem;
