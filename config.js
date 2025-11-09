// Firebase configuration - move to environment variables in production
const firebaseConfig = {
    apiKey: "AIzaSyCFzGCN5Vnabxos0nv4OhwLlKkvMixsNXU",
    authDomain: "imtihaan-91c4c.firebaseapp.com",
    databaseURL: "https://imtihaan-91c4c-default-rtdb.firebaseio.com",
    projectId: "imtihaan-91c4c",
    storageBucket: "imtihaan-91c4c.firebasestorage.app",
    messagingSenderId: "171603884864",
    appId: "1:171603884864:web:257ba169597072368818a5"
};

// Input sanitization utility
function sanitizeInput(input) {
    if (typeof input !== 'string') return '';
    return input.replace(/[<>\"'&]/g, function(match) {
        const escapeMap = {
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#x27;',
            '&': '&amp;'
        };
        return escapeMap[match];
    }).trim();
}

function validateInput(input, maxLength = 20) {
    const sanitized = sanitizeInput(input);
    return sanitized.length > 0 && sanitized.length <= maxLength ? sanitized : null;
}