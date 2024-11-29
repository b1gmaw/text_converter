// Convert to UPPERCASE
function toUppercase() {
    const inputText = document.getElementById("inputText").value;
    document.getElementById("outputText").value = inputText.toUpperCase();
  }
  
  // Convert to lowercase
  function toLowercase() {
    const inputText = document.getElementById("inputText").value;
    document.getElementById("outputText").value = inputText.toLowerCase();
  }
  
  // Convert to Full-Width (ASCII, Katakana, and spaces)
  function toFullWidth() {
    const inputText = document.getElementById("inputText").value;
    const fullWidthText = inputText.replace(/[\u0020-\u007E]/g, (char) => {
      return String.fromCharCode(char.charCodeAt(0) + 0xfee0);
    }).replace(/[\uFF61-\uFF9F]/g, (char) => {
      // Katakana half-width to full-width conversion
      return String.fromCharCode(char.charCodeAt(0) + 0x60);
    });
    document.getElementById("outputText").value = fullWidthText;
  }
  
  // Convert to Half-Width (ASCII, Katakana, and spaces)
  function toHalfWidth() {
    const inputText = document.getElementById("inputText").value;
    const halfWidthText = inputText.replace(/[\uFF01-\uFF5E]/g, (char) => {
      return String.fromCharCode(char.charCodeAt(0) - 0xfee0);
    }).replace(/[\u3000]/g, ' ') // Full-width space to half-width space
      .replace(/[\u30A0-\u30FF]/g, (char) => {
        // Katakana full-width to half-width conversion
        return String.fromCharCode(char.charCodeAt(0) - 0x60);
      });
    document.getElementById("outputText").value = halfWidthText;
  }
  
  // Clear input and output fields
  function clearText() {
    document.getElementById("inputText").value = "";
    document.getElementById("outputText").value = "";
  }
  
  // Copy to Clipboard
  function copyToClipboard() {
    const outputText = document.getElementById("outputText").value;
  
    if (!outputText.trim()) {
      alert("No text to copy!");
      return;
    }
  
    navigator.clipboard.writeText(outputText)
      .then(() => alert("Text copied to clipboard!"))
      .catch((err) => {
        console.error("Clipboard copy failed:", err);
        alert("Failed to copy text.");
      });
  }
  
  // Dark Mode/Light Mode Toggle
  const themeToggle = document.getElementById("themeToggle");
  
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
  