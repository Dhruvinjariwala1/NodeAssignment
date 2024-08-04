const readline = require('readline');
const TechSupportChatbot = require('./chat');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const chatbot = new TechSupportChatbot();

console.log("Welcome to Chatbot!");
console.log("Type your message and press Enter. Type 'exit' to quit.");

rl.on('line', (input) => {
    if (input.toLowerCase() === 'exit') {
        console.log("Goodbye!");
        rl.close();
    } else {
        const response = chatbot.getResponse(input);
        console.log(response);
    }
});