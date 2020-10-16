const Item = (props) => {
  return (
    <div class="w-40 rounded overflow-hidden shadow-lg bg-gray-800 m-2 text-center">
      <div class="px-3 py-2">
        <div class="font-bold text-xl mb-2">{props.price},-</div>
        <p class="text-white">{props.description}</p>
      </div>
    </div>
  );
};

const SilentAuction = (props) => {
  const items = props.items.map((item) => (
    <Item description={item.description} price={item.price} />
  ));

  return <div class="flex flex-wrap">{items}</div>;
};

export default SilentAuction;
