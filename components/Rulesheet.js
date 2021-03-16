import styles from "./Rulesheet.module.css";

let MarkdownIt = require("markdown-it"),
  md = new MarkdownIt();

const Rulesheet = (props) => {
  console.log(props);
  return (
    <div className="flex flex-row flex-wrap justify-evenly">
      <div
        className={styles.markdownBody}
        dangerouslySetInnerHTML={{
          __html: md.render(props.rulesheet.markdown),
        }}
      />
    </div>
  );
};

export default Rulesheet;
