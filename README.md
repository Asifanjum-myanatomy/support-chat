💬 Support Chat Widget
A lightweight, modern, and fun customer support chat widget built using HTML, CSS, and JavaScript. This widget simulates a real-time support assistant with features like chat history, auto-reply, and stylish UI—all without any backend.

✨ Features
🪄 Floating chat button to toggle the widget

💬 Simulated auto-replies to mimic real-time conversation

🧠 Chat history saved using localStorage

🧹 Clear button to remove all chat history

❌ Close button to hide the widget overlay

💡 Responsive, minimal, and stylish UI

📁 Project Structure
bash
Copy
Edit
Support-chat/
├── index.html         # Main HTML structure
├── styles.css         # UI styling and responsiveness
└── script.js          # Functionality and interactions
🚀 Live Demo
Coming Soon — You can clone and open the index.html file directly in your browser.

🧠 Functional Overview
🧱 index.html
Contains:

Main welcome text

Chat toggle button (💬)

History panel to show past messages

Chat overlay with message area, input box, send/clear/close buttons

🎨 styles.css
Styles the chat widget with:

Blur-backdrop for the overlay

Chat bubbles with color themes

Responsive layout for mobile and desktop

Button hover effects and disabled states

⚙️ script.js
Contains all interactive logic:

✅ toggleChat()
Toggles the chat widget visibility.

✅ sendMessage()
Handles user input and displays it in the chat. Also triggers bot's fake reply.

✅ simulateReply()
Mimics a chatbot by generating a placeholder auto-reply after a delay.

✅ renderMessages()
Renders all messages stored in localStorage (for history view and widget).

✅ clearMessages()
Clears both widget and history messages + removes from localStorage.

✅ storeMessage()
Saves messages to localStorage as an array of objects.

✅ Event Listeners
Attached to:

Send button (click)

Enter key in the input box

Clear and Close buttons

Chat toggle button

🛠️ Tech Used
HTML5

CSS3 (with flex, positioning, and backdrop-filter)

JavaScript (DOM, localStorage, event handling)

📦 Installation
bash
Copy
Edit
git clone https://github.com/your-username/Support-chat.git
cd Support-chat
open index.html
No build steps or dependencies—just open and go.

🙌 Contributing
Pull requests are welcome! If you find a bug or want to improve UX/UI or features, feel free to fork and submit changes.

📄 License
MIT License
