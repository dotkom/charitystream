import styles from "./CoundownRenderer.module.css";

const CountdownRenderer = ({ hours, minutes, seconds }) => {
  return (
    <div className={styles.container}>
      <span>
        {hours}:{minutes}:{seconds}
      </span>
    </div>
  );
};

export default CountdownRenderer;
