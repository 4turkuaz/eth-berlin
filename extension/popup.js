document.getElementById("fetchHistory").addEventListener("click", () => {
  chrome.runtime.sendMessage({ action: "getHistory" }, (response) => {
    fetch("http://localhost:8000/search_history", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ history: response.history }),
    })
      .then((response) => response.json())
      .then((data) => console.log("History sent successfully:", data))
      .catch((error) => console.error("Error sending history:", error));
  });
});
