import { useState, useEffect } from "react";
import Button from "./Button";

function CopyToClipboard({ colorCode, color }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(colorCode);
      setCopied(true);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };
  useEffect(() => {
    if (!copied) return;
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  }, [copied]);

  return (
    <div>
      {!copied && <Button onClick={handleCopy}>Copy Code</Button>}

      {copied && (
        <p style={{ color: { color } }}>Color Code copied successfully!</p>
      )}
    </div>
  );
}

export default CopyToClipboard;
