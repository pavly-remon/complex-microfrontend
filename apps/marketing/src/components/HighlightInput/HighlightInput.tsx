import { useCallback, useMemo, useRef, useState } from "react";
import "./HighlightInput.scss";
const HighlightInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [highlightedText, setHighlightedText] = useState<string[] | null>();
  const keywords = useMemo(
    () =>
      new Set([
        "const",
        "let",
        "var",
        "function",
        "return",
        "if",
        "else",
        "for",
        "while",
        "class",
        "import",
        "export",
        "default",
        "async",
        "await",
        "try",
        "catch",
        "throw",
        "new",
      ]),
    []
  );
  const setColor = useCallback(
    (word: string): string => {
      if (keywords.has(word)) return "blue";
      if (word.startsWith("{{") && word.endsWith("}}")) return "green";
      if (word.startsWith("@")) return "#ff0000";
      return "black";
    },
    [keywords]
  );

  return (
    <div className="hIWrapper">
      {highlightedText && (
        <div className="hIPreview">
          {highlightedText.map((text, index) => (
            <span key={index} style={{ color: setColor(text) }}>
              {text + " "}
            </span>
          ))}
        </div>
      )}
      <input
        className="hIInput"
        ref={inputRef}
        onChange={(e) => setHighlightedText(e.target.value.split(" "))}
      />
    </div>
  );
};

export default HighlightInput;
