/* Basic reset */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* Fullscreen background */
body {
    font-family: Arial, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f4f4f9;
    color: #333;
    text-align: center;
}

/* Main content styling */
.content {
    position: relative;
}

/* Image Styling */
.main-image {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
}

/* Chat Box Container */
.chat-box-container {
    position: fixed;
    right: 20px;
    bottom: 20px;
    z-index: 10;
}

.chat-box {
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 300px;
    overflow: hidden;
}

.chat-header {
    background-color: #007BFF;
    color: #fff;
    padding: 10px;
    text-align: center;
    font-weight: bold;
}

.chat-window {
    padding: 15px;
    height: 200px;
    overflow-y: auto;
    border-bottom: 1px solid #ddd;
}

.chat-message {
    margin: 10px 0;
    padding: 8px;
    border-radius: 5px;
    max-width: 80%;
}

.chat-message.ai {
    background-color: #f1f1f1;
    margin-left: auto;
}

.chat-message.user {
    background-color: #d1ffd1;
    margin-right: auto;
}

/* Button container */
.button-container {
    padding: 15px;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.chat-button {
    background-color: #007BFF;
    color: #fff;
    border: none;
    padding: 10px;
    width: 100%;
    border-radius: 5px;
    cursor: pointer;
    font-size: 14px;
}

.chat-button:hover {
    background-color: #0056b3;
}

/* Social handles at the bottom */
.social-handles {
    position: fixed;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 20;
}

.social-handles a {
    margin: 0 10px;
    text-decoration: none;
    color: #007BFF;
}

.social-handles a:hover {
    text-decoration: underline;
}
