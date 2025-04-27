document.addEventListener('DOMContentLoaded', function() {
    const chatBubble = document.getElementById('chat-bubble');
    const chatWindow = document.getElementById('chat-window');
    const closeChatButton = document.getElementById('close-chat');
    const sendMessageButton = document.getElementById('send-message');
    const messageInput = document.getElementById('message-input');
    const chatMessages = document.querySelector('.chat-messages');
    const clearMessagesButton = document.querySelector('.clear-messages-btn');

    chatBubble.addEventListener('click', function() {
        chatWindow.classList.toggle('chat-window-open');
    });

    closeChatButton.addEventListener('click', function() {
        chatWindow.classList.remove('chat-window-open');
    });

    sendMessageButton.addEventListener('click', function() {
        const messageText = messageInput.value.trim();
        if (messageText !== '') {
            const messageElement = document.createElement('div');
            messageElement.classList.add('message');
            messageElement.textContent = messageText;
            chatMessages.appendChild(messageElement);
            messageInput.value = '';
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }
    });
    
     clearMessagesButton.addEventListener('click', function() {
        chatMessages.innerHTML = '';
    });
});