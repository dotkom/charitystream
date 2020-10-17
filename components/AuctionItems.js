const Item = (props) => {
  return (
    <div className="w-40 rounded overflow-hidden shadow-lg bg-gray-800 m-2 text-center">
      <div className="px-3 py-2">
        <div className="font-bold text-xl mb-2">{props.price},-</div>
        <p className="text-white">{props.description}</p>
      </div>
    </div>
  );
};

const AuctionItems = (props) => {
  const items = props.items.map((item) => (
    <Item description={item.description} price={item.price} />
  ));

  return <div className="grid grid-flow-row grid-cols-4 gap-3">{items}</div>;
};

export default AuctionItems;
