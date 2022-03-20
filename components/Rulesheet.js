import styles from "./Rulesheet.module.css";

let MarkdownIt = require("markdown-it"),
  md = new MarkdownIt();

const Rulesheet = (props) => {
  return (
    <div className={styles.rulesheetWrapper}>
      <div
        className={styles.markdownBody}
        dangerouslySetInnerHTML={{
          __html: md.render(props.rulesheet?.markdown),
        }}
      />
    </div>
  );
};

export default Rulesheet;
