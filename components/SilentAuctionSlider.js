import styles from "./SilentAuctionSlider.module.css";

import AuctionItem from "./AuctionItem";

const SilentAuctionSlider = (props) => {
  const items = props.items.map((item, index) => (
    <AuctionItem
      key={index}
      description={item.description}
      price={item.price}
    />
  ));

  return (
    <div className={styles.wrapper}>
      <div className={styles.slideshow}>{items}</div>
    </div>
  );
};

export default SilentAuctionSlider;
