async function sendMessage() {
    const userInput = document.getElementById('userInput').value.trim().toLowerCase();
    if (!userInput) return;

    const chat = document.getElementById('chat');
    chat.innerHTML += `<div class="chat-message"><strong>User:</strong> ${userInput}</div>`;

    const response = await fetch('input.csv');
    const data = await response.text();
    const rows = data.split('\n');

    let found = false;
    rows.forEach(row => {
        const [question, answer] = row.split(',');
        if (question.trim().toLowerCase() === userInput) {
            chat.innerHTML += `<div class="chat-message"><strong>Chatbot:</strong> ${answer}</div>`;
            found = true;   
        }
    });

    if (!found) {
        chat.innerHTML += `<div class="chat-message"><strong>Chatbot:</strong> Sorry, I don't understand.</div>`;
    }

    document.getElementById('userInput').value = '';
    chat.scrollTop = chat.scrollHeight;
}

// Initialize chatbot with a welcome message
sendMessage();
