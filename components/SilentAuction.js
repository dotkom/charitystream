import styles from "./SilentAuction.module.css";
import Link from "next/link";

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

const SilentAuction = (props) => {
  const items = props.items.map((item, index) => (
    <Item key={index} description={item.description} price={item.price} />
  ));

  return (
    <div className="flex flex-col items-center">
      <Link href="/auksjon" class="font-bold">
        <button class="mb-2 mt-2 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
          Gå til stilleauksjon
        </button>
      </Link>
      <div className={styles.wrapper}>
        <div className={styles.slideshow}>{items}</div>
      </div>
    </div>
  );
};

export default SilentAuction;
