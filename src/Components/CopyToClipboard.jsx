import { useState, useEffect } from "react";

function CopyToClipboard({ colorCode }) {
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

    const timer = setTimeout(() => {
      setCopied(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [copied]);

  return (
    <div>
      <button onClick={handleCopy}>Copy Code</button>

      {copied && (
        <p style={{ color: "green", marginTop: "8px" }}>
          Color Code copied successfully!
        </p>
      )}
    </div>
  );
}

export default CopyToClipboard;
