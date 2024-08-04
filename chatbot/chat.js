class chat {
    constructor() {
        this.responses = {
            greeting: "Hello! How can I assist you today?",
            help: "I'm here to help with chatbot. You can ask me about software installation, troubleshooting, and more.",
            software_installation: "To install software, please download the installer from the official website and follow the on-screen instructions.",
            troubleshooting: "Can you describe the issue you're facing? I'll do my best to assist you.",
            goodbye: "Thank you for using our chatbot. Have a great day!",
        };
    }

    getResponse(message) {
        const lowerCaseMessage = message.toLowerCase();
        if (lowerCaseMessage.includes("hello") || lowerCaseMessage.includes("hi")) {
            return this.responses.greeting;
        } else if (lowerCaseMessage.includes("help")) {
            return this.responses.help;
        } else if (lowerCaseMessage.includes("install software")) {
            return this.responses.software_installation;
        } else if (lowerCaseMessage.includes("troubleshoot")) {
            return this.responses.troubleshooting;
        } else if (lowerCaseMessage.includes("bye")) {
            return this.responses.goodbye;
        } else {
            return "I'm sorry, I didn't understand that. Can you please rephrase?";
        }
    }
}

module.exports = chat;