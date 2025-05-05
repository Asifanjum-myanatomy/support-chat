// Elements
const chatToggle    = document.getElementById('chat-toggle');
const chatOverlay   = document.getElementById('chat-overlay');
const closeBtn      = document.getElementById('close-btn');
const clearBtn      = document.getElementById('clear-btn');
const sendBtn       = document.getElementById('send-btn');
const chatInput     = document.getElementById('chat-input');
const messageArea   = document.getElementById('message-area');
const historyPanel  = document.getElementById('history-messages');

// LocalStorage key
const STORAGE_KEY = 'supportChatHistory';

// Load history from localStorage
let history = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

// Render both panels
function renderHistory() {
  historyPanel.innerHTML = '';
  history.forEach(msg => {
    const div = document.createElement('div');
    div.className = `history-msg ${msg.sender}`;
    div.textContent = msg.text;
    historyPanel.append(div);
  });
}
function renderChat() {
  messageArea.innerHTML = '';
  history.slice(-20).forEach(msg => {
    const div = document.createElement('div');
    div.className = `message ${msg.sender}`;
    div.textContent = msg.text;
    messageArea.append(div);
  });
  messageArea.scrollTop = messageArea.scrollHeight;
}

// Persist to localStorage
function saveHistory() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
}

// Send a new message
function sendMessage() {
  const text = chatInput.value.trim();
  if (!text) return;
  // user message
  history.push({ sender: 'user', text });
  renderChat();
  renderHistory();
  saveHistory();
  chatInput.value = '';
  sendBtn.disabled = true;
  // simulate agent reply
  setTimeout(() => {
    const reply = `We’ve received: "${text}" — we'll get back to you soon!`;
    history.push({ sender: 'agent', text: reply });
    renderChat();
    renderHistory();
    saveHistory();
  }, 800);
}

// Clear all
clearBtn.addEventListener('click', () => {
  if (confirm('Clear all chat history?')) {
    history = [];
    saveHistory();
    renderChat();
    renderHistory();
  }
});

// Toggle chat open/close
chatToggle.addEventListener('click', () => {
  chatOverlay.classList.add('visible');
  renderChat();
});
closeBtn.addEventListener('click', () => {
  chatOverlay.classList.remove('visible');
});

// Enable send button only when input has text
chatInput.addEventListener('input', () => {
  sendBtn.disabled = !chatInput.value.trim();
});
sendBtn.addEventListener('click', sendMessage);

// Initial render
renderHistory();
