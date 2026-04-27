document.addEventListener('DOMContentLoaded', () => {
    const chatToggle = document.getElementById('chat-toggle');
    const chatWindow = document.getElementById('chat-window');
    const closeChat = document.getElementById('close-chat');
    const chatInput = document.getElementById('chat-input');
    const chatSend = document.getElementById('chat-send');
    const chatBody = document.getElementById('chat-body');

    let chatHistory = [];

    // Toggle Chat Window
    if (chatToggle) {
        chatToggle.onclick = () => {
            chatWindow.style.display = chatWindow.style.display === 'flex' ? 'none' : 'flex';
            if (chatWindow.style.display === 'flex') {
                chatInput.focus();
            }
        };
    }

    if (closeChat) {
        closeChat.onclick = () => {
            chatWindow.style.display = 'none';
        };
    }

    // Send Message
    const sendMessage = async () => {
        const text = chatInput.value.trim();
        if (!text) return;

        // Add User Message to UI
        addMessage(text, 'user');
        chatInput.value = '';

        // Add Typing Indicator
        const typingId = addTypingIndicator();
        try {
            const response = await fetch('http://localhost:3002/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: text, history: chatHistory })
            });

            const data = await response.json();
            removeTypingIndicator(typingId);

            // Add Bot Message to UI
            addMessage(data.reply, 'bot');

            // Update History
            chatHistory.push({ role: 'user', parts: [{ text: text }] });
            chatHistory.push({ role: 'model', parts: [{ text: data.reply }] });

        } catch (error) {
            console.error("Chat Error:", error);
            removeTypingIndicator(typingId);
            addMessage("Oops! I'm having trouble connecting to the server. Please make sure the backend is running.", 'bot');
        }
    };

    if (chatSend) chatSend.onclick = sendMessage;
    if (chatInput) {
        chatInput.onkeypress = (e) => {
            if (e.key === 'Enter') sendMessage();
        };
    }

    function addMessage(text, sender) {
        const msgDiv = document.createElement('div');
        msgDiv.className = `chat-msg msg-${sender}`;
        msgDiv.innerText = text;
        chatBody.appendChild(msgDiv);
        chatBody.scrollTop = chatBody.scrollHeight;
    }

    function addTypingIndicator() {
        const id = 'typing-' + Date.now();
        const typingDiv = document.createElement('div');
        typingDiv.id = id;
        typingDiv.className = 'chat-msg msg-bot typing-indicator';
        typingDiv.innerHTML = '<span>.</span><span>.</span><span>.</span>';
        chatBody.appendChild(typingDiv);
        chatBody.scrollTop = chatBody.scrollHeight;
        return id;
    }

    function removeTypingIndicator(id) {
        const el = document.getElementById(id);
        if (el) el.remove();
    }
});
