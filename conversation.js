document.addEventListener("DOMContentLoaded", function () {
    const responses = [];

    // Load responses from CSV file
    fetch('inputs.csv')
        .then(response => response.text())
        .then(text => {
            // Parse CSV text
            const rows = text.split('\n');
            rows.forEach(row => {
                const columns = row.split(',');
                if (columns.length > 1) { // Check if there are at least two columns
                    responses.push({
                        userInput: columns[0].trim().toLowerCase(),
                        response: columns[1].trim()
                    });
                }
            });
        })
        .catch(error => console.error('Error loading responses:', error));

    // Function to handle sending user message
    function sendUserMessage() {
        const userInput = document.getElementById("userInput").value.trim().toLowerCase();
        if (userInput !== "") {
            displayMessage(userInput, true);
            setTimeout(() => {
                const response = getResponse(userInput);
                displayMessage(response, false);
            }, 500); // Simulating response delay
            document.getElementById("userInput").value = "";
        }
    }

    // Function to display message in chat
    function displayMessage(message, isUser) {
        const chatOutput = document.getElementById("chatOutput");
        const messageDiv = document.createElement("div");
        messageDiv.classList.add(isUser ? "userMessage" : "botMessage");
        messageDiv.innerText = message;
        chatOutput.appendChild(messageDiv);
        chatOutput.scrollTop = chatOutput.scrollHeight;
    }

    // Function to get response from CSV based on user input
    function getResponse(userInput) {
        const matchedResponse = responses.find(entry => entry.userInput === userInput);
        return matchedResponse ? matchedResponse.response : "Sorry, I couldn't understand that. Please try again.";
    }

    // Event listener for send button click
    document.getElementById("sendButton").addEventListener("click", sendUserMessage);
});
let mentalHealthPercentage = 0;

function updateMentalHealth() {
    const mentalHealthElement = document.getElementById('mentalHealthPercentage');
    mentalHealthElement.textContent = `${mentalHealthPercentage}%`;
}

function processUserInput(input) {
    // Simulate processing based on user input
    // You can add logic here to update mental health percentage based on user input
    mentalHealthPercentage += 10; // For demonstration purposes, increase by 10% on each input
    if (mentalHealthPercentage > 100) {
        mentalHealthPercentage = 100; // Cap at 100%
    }
    updateMentalHealth();
}

function displayMessage(message) {
    const conversationOutput = document.getElementById('conversationOutput');
    const messageElement = document.createElement('div');
    messageElement.textContent = message;
    conversationOutput.appendChild(messageElement);
    processUserInput(message); // Process user input and update mental health
}

function sendMessage() {
    const userInput = document.getElementById('userInput');
    const message = userInput.value.trim();
    if (message !== '') {
        displayMessage(`You: ${message}`);
        userInput.value = '';
    }
}