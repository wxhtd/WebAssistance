chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
      id: "explainText",
      title: "Explain this text",
      contexts: ["selection"]
    });
  });
  
  chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "explainText" && info.selectionText) {
      fetch("http://localhost:3000/explain", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: info.selectionText })
      })
        .then(response => response.json())
        .then(data => {
          chrome.scripting.executeScript({
            target: { tabId: tab.id },
            func: showFlyout,
            args: [data.explanation]
          });
        })
        .catch(err => console.error("Error:", err));
    }
  });
  
  // Injects the flyout into the webpage
  function showFlyout(explanation) {
    const existingFlyout = document.getElementById("text-explainer-flyout");
    if (existingFlyout) existingFlyout.remove();
  
    const flyout = document.createElement("div");
    flyout.id = "text-explainer-flyout";
    flyout.innerHTML = `
      <h3>Explanation</h3>
      <p>${explanation}</p>
      <button id="close-flyout">Close</button>
    `;
  
    flyout.style = `
      position: fixed;
      top: 20px;
      right: 20px;
      width: 300px;
      padding: 10px;
      background-color: #f9f9f9;
      border: 1px solid #ccc;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      z-index: 10000;
      font-family: Arial, sans-serif;
    `;
  
    document.body.appendChild(flyout);
  
    document.getElementById("close-flyout").onclick = () => flyout.remove();
  }
  