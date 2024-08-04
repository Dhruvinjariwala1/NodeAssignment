const fetch = require('node-fetch');

const fetchGooglePage = async() => {
    try {
        const response = await fetch('https://www.google.com');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const text = await response.text();
        console.log(text);
    } catch (error) {
        console.error('Error fetching Google page:', error);
    }
};

fetchGooglePage();