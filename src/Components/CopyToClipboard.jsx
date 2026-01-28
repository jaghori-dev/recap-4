import { useState, useEffect } from "react";

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
      <button onClick={handleCopy}>Copy Code</button>

      {copied && (
        <p style={{ color: { color } }}>Color Code copied successfully!</p>
      )}
    </div>
  );
}

export default CopyToClipboard;
