import styles from "./SilentAuctionSlider.module.css";

const Item = (props) => {
  return (
    <div
      className="w-48 rounded overflow-hidden shadow-lg m-2 text-center px-3 py-2"
      style={{ background: "#444" }}
    >
      <div className="font-bold text-2xl mb-2">{props.price},-</div>
      <hr />
      <p className="text-white text-base mt-4 mb-4">{props.description}</p>
    </div>
  );
};

const SilentAuctionSlider = (props) => {
  const items = props.items.map((item, index) => (
    <Item key={index} description={item.description} price={item.price} />
  ));

  return (
    <div className={styles.wrapper}>
      <div className={styles.slideshow}>{items}</div>
    </div>
  );
};

export default SilentAuctionSlider;
