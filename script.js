const chatMessages = document.querySelector('.chat-messages');
const chatInput = document.getElementById('chat-input');
const sendButton = document.getElementById('send-button');

// Function to add a new chat message
function addChatMessage(message, sender) {
  const chatMessage = document.createElement('div');
  chatMessage.classList.add('chat-message');
  chatMessage.textContent = `${sender}: ${message}`;
  chatMessages.appendChild(chatMessage);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Event listener for the send button
sendButton.addEventListener('click', () => {
  const message = chatInput.value.trim();
  if (message) {
    addChatMessage(message, 'You');
    chatInput.value = '';
    // Here, you can add code to send the message to the server
  }
});

// Example usage: adding a sample message
addChatMessage('Hello, welcome to the chatroom!', 'System');