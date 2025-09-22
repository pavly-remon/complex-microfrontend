import { makeStyles } from "@material-ui/core/styles";
import { useRef, useState } from "react";
const HighlightInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [highlightedText, setHighlightedText] = useState<string[] | null>();
  const styles = useStyles();

  const setColor = (word: string): string => {
    if (word === "const") return "blue";
    if (word.startsWith("{{") && word.endsWith("}}")) return "green";
    if (word.startsWith("@")) return "#ff0000";
    return "black";
  };

  return (
    <div className={styles.hIWrapper}>
      {highlightedText && (
        <div className={styles.hIPreview}>
          {highlightedText.map((text, index) => (
            <span key={index} style={{ color: setColor(text) }}>
              {text + " "}
            </span>
          ))}
        </div>
      )}
      <input
        className={styles.hIInput}
        ref={inputRef}
        onChange={(e) => setHighlightedText(e.target.value.split(" "))}
      />
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  hIWrapper: { position: "relative", width: "100%" },
  blue: { color: "blue" },
  green: { color: "green" },
  hIPreview: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    padding: theme.spacing(1),
    height: "100%",
    width: "100%",
    border: "1px solid #ccc",
    borderRadius: "4px",
    boxSizing: "border-box",
    fontSize: "16px",
    pointerEvents: "none",
  },
  constWord: {
    color: "blue",
  },
  hIInput: {
    position: "relative",
    background: "transparent",
    border: "1px solid #ccc",
    borderRadius: "4px",
    padding: theme.spacing(1),
    width: "100%",
    boxSizing: "border-box",
    color: "transparent",
    fontSize: "16px",
    "&:focus": {
      outline: "none",
      borderColor: theme.palette.primary.main,
      boxShadow: `0 0 0 2px ${theme.palette.primary.light}`,
    },
  },
}));

export default HighlightInput;
