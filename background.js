chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete' && /^https:\/\/chat\.openai\.com\/c\//.test(tab.url)) {
    chrome.scripting.executeScript({
      target: {tabId: tabId},
      files: ['content.js']
    });
  }
});
