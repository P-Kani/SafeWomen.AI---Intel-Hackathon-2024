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
}

function sendMessage() {
    const userInput = document.getElementById('userInput');
    const message = userInput.value.trim();
    if (message !== '') {
        displayMessage(`You: ${message}`);
        processUserInput(message);
        userInput.value = '';
    }
}

