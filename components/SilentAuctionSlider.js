import styles from "./SilentAuctionSlider.module.css";

import AuctionItem from "./AuctionItem";

const SilentAuctionSlider = (props) => {
  const items = props.items.map((item, index) => (
    <tr key={index}>
      <td>{item.description}</td>
      <td>{item.price}</td>
      <td>{item.name}</td>
    </tr>
  ));

  return (
    <div className={styles.wrapper}>
      <table>
        <tr classname={styles.header}>
          <th>Auksjon</th>
          <th>Pris</th>
          <th>Budgiver</th>
        </tr>
        {items}
      </table>
    </div>
  );
};

export default SilentAuctionSlider;
