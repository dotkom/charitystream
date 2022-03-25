import styles from "./SilentAuctionSlider.module.css";

const SilentAuctionSlider = (props) => {
  let items = props.items;

  items = items.sort((a, b) => {
    a.price - b.price;
  });

  items = props.items.map((item, index) => (
    <tr key={index}>
      <td className="m-1 text-2xl">{item.title}</td>
      <td className="m-1 text-2xl">{item.price},-</td>
      <td className="m-1 text-2xl">{item.highestBid}</td>
    </tr>
  ));

  return (
    <div className={styles.wrapper}>
      <div className="m-1 text-4xl mb-2 mt-20 text-center">
        Enkel oversikt auksjoner
      </div>
      <table className={styles.tableMain}>
        <tr className={styles.header}>
          <th className="m-1 text-lg sm:text-3xl ">Auksjon</th>
          <th className="m-1 text-lg sm:text-3xl">Pris</th>
          <th className="m-1 text-lg sm:text-3xl">Høyeste budgiver</th>
        </tr>
        {items}
      </table>
    </div>
  );
};

export default SilentAuctionSlider;
