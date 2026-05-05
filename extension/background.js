// Service worker -- forwards extension messages to the active tab's content
// script. Mostly a thin bus; the real work is in content.js and popup.js.

chrome.runtime.onInstalled.addListener(() => {
  console.log("career-ops auto-apply installed");
});

// Generic relay: any message addressed to a tabId is forwarded.
chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg?.type === "AUTO_APPLY_RELAY" && msg.tabId) {
    chrome.tabs.sendMessage(msg.tabId, msg.payload, (resp) => {
      sendResponse(resp);
    });
    return true; // async
  }
});
