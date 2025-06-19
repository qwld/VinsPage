document.addEventListener('DOMContentLoaded', () => {
    const chatBoxContainer = document.getElementById('chatBoxContainer');
    const chatBox = document.getElementById('chatBox');
    const userInput = document.getElementById('userInput');
    const sendMessageBtn = document.getElementById('sendMessage');
    const chatWindow = document.getElementById('chatWindow');

    // Open the chat box when clicked
    chatBoxContainer.addEventListener('click', () => {
        chatBox.style.display = chatBox.style.display === 'block' ? 'none' : 'block';
    });

    // Handle the fake chat messages
    sendMessageBtn.addEventListener('click', () => {
        const userMessage = userInput.value.trim();

        if (userMessage) {
            // Add user message
            const userMessageDiv = document.createElement('div');
            userMessageDiv.classList.add('chat-message', 'user');
            userMessageDiv.textContent = userMessage;
            chatWindow.appendChild(userMessageDiv);

            // Scroll to the bottom
            chatWindow.scrollTop = chatWindow.scrollHeight;

            // Clear input field
            userInput.value = '';

            // Simulate AI response based on the message
            setTimeout(() => {
                const aiResponse = getAIResponse(userMessage);
                const aiMessageDiv = document.createElement('div');
                aiMessageDiv.classList.add('chat-message', 'ai');
                aiMessageDiv.textContent = aiResponse;
                chatWindow.appendChild(aiMessageDiv);

                // Scroll to the bottom
                chatWindow.scrollTop = chatWindow.scrollHeight;
            }, 1000);
        }
    });

    // Function to simulate AI response based on user input
    function getAIResponse(message) {
        message = message.toLowerCase();

        if (message.includes('hello') || message.includes('hi')) {
            return 'Hi there! How can I assist you today?';
        } else if (message.includes('help')) {
            return 'I can help you with biology-related questions. What would you like to know?';
        } else if (message.includes('bye')) {
            return 'Goodbye! Have a great day!';
        } else {
            return 'Sorry, I didn\'t understand that. Can you rephrase?';
        }
    }
});
