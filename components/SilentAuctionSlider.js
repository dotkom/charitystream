import styles from "./SilentAuctionSlider.module.css";

const SilentAuctionSlider = (props) => {
  let items = props.items;

  items = items.sort((a, b) => {
    a.price - b.price;
  });

  items = props.items.map((item, index) => (
    <tr key={index}>
      <td>{item.title}</td>
      <td>{item.price},-</td>
      <td>{item.highestBid}</td>
    </tr>
  ));

  return (
    <div className={styles.wrapper}>
      <div className="font-bold m-1 text-xl mb-2">Enkel oversikt auksjoner</div>
      <table className={styles.tableMain}>
        <tr className={styles.header}>
          <th>Auksjon</th>
          <th>Pris</th>
          <th>Høyeste budgiver</th>
        </tr>
        {items}
      </table>
    </div>
  );
};

export default SilentAuctionSlider;
