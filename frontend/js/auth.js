

const API_URL = 'https://task-tracker-1-temf.onrender.com';
const authMessage = document.getElementById('auth-message');

// --- LOGIN LOGIC ---
document.getElementById('login-form').addEventListener('submit', async (e) => {
    e.preventDefault(); // Prevents the page from refreshing
    
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    try {
        const response = await fetch(`${API_URL}/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });
        
        const data = await response.json();
        
        if (response.ok) {
            // Save the user data and token to the browser
            localStorage.setItem('user', JSON.stringify(data));
            // Redirect to the main tasks page (we will build this next)
            window.location.href = 'index.html'; 
        } else {
            authMessage.innerText = data.message;
        }
    } catch (error) {
        authMessage.innerText = 'Server error. Is the backend running?';
    }
});

// --- REGISTER LOGIC ---
document.getElementById('register-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const name = document.getElementById('reg-name').value;
    const email = document.getElementById('reg-email').value;
    const password = document.getElementById('reg-password').value;

    try {
        const response = await fetch(`${API_URL}/register`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, password })
        });
        
        const data = await response.json();
        
        if (response.ok) {
            // Save the user data and token to the browser
            localStorage.setItem('user', JSON.stringify(data));
            // Redirect to the main tasks page
            window.location.href = 'index.html'; 
        } else {
            authMessage.innerText = data.message;
        }
    } catch (error) {
        authMessage.innerText = 'Server error. Is the backend running?';
    }
});