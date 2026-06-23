// Narmada Tools Shared Utilities

// Copy text to clipboard and trigger confetti
window.copyToClipboard = async function(text) {
  try {
    await navigator.clipboard.writeText(text);
    
    // Trigger canvas-confetti (loaded via CDN on pages)
    if (window.confetti) {
      window.confetti({
        particleCount: 50,
        spread: 60,
        colors: ["#3b82f6", "#10b981", "#6366f1"],
        origin: { y: 0.8 }
      });
    }
    return true;
  } catch (err) {
    console.error("Failed to copy text: ", err);
    return false;
  }
};

// Download string content to client's device
window.downloadFile = function(content, filename, mimeType) {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);

  if (window.confetti) {
    window.confetti({
      particleCount: 40,
      spread: 60,
      colors: ["#10b981", "#059669"],
      origin: { y: 0.8 }
    });
  }
};

// Formats file sizes
window.formatSize = function(bytes) {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const sizes = ["Bytes", "KB", "MB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
};
