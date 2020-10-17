const Item = (props) => {
  return (
    <div className="w-40 rounded overflow-hidden shadow-lg m-2 text-center px-3 py-2" style={{background: "#444"}}>
      <div className="font-bold text-xl mb-2">{props.price},-</div>
      <hr/>
      <p className="text-white text-base mb-8">{props.description}</p>
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
