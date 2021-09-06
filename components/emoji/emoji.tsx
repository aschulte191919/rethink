interface EmojiType {
  label?: string;
  symbol: any;
}

const Emoji = (props: EmojiType) => (
  <span
    style={{
      fontSize: "30px",
      opacity: props.label ? "1" : "0.5",
      paddingRight: "8px",
    }}
    className="emoji"
    role="img"
    aria-label={props.label ? props.label : ""}
    aria-hidden={props.label ? "false" : "true"}
  >
    {props.symbol}
  </span>
);
export default Emoji;
