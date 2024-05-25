chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "getHistory") {
    chrome.history.search({ text: "", maxResults: 100 }, (data) => {
      sendResponse({ history: data });
    });
    return true;
  }
});
