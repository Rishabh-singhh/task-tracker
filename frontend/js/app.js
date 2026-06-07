const API_URL = 'https://task-tracker-1-temf.onrender.com';

// 1. Security Check: Is the user actually logged in?
const user = JSON.parse(localStorage.getItem('user'));

if (!user) {
    // If no user token is found, kick them back to the login page
    window.location.href = 'login.html'; 
} else {
    // Set the welcome message
    document.getElementById('welcome-message').innerText = `Welcome, ${user.name}`;
}

// 2. Logout Logic
document.getElementById('logout-btn').addEventListener('click', () => {
    localStorage.removeItem('user'); // Delete the token
    window.location.href = 'login.html'; // Send back to login
});

// 3. Fetch and Display Tasks
const getTasks = async () => {
    try {
        const response = await fetch(API_URL, {
            headers: {
                Authorization: `Bearer ${user.token}`, // Send the secure token!
            },
        });
        
        const tasks = await response.json();
        const taskList = document.getElementById('task-list');
        taskList.innerHTML = ''; // Clear current list so we don't duplicate

        tasks.forEach(task => {
            const li = document.createElement('li');
            li.className = 'task-item';
            li.innerHTML = `
                <span>${task.text}</span>
                <button class="delete-btn" onclick="deleteTask('${task._id}')">X</button>
            `;
            taskList.appendChild(li);
        });
    } catch (error) {
        console.error('Error fetching tasks', error);
    }
};

// 4. Add a New Task
document.getElementById('task-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const textInput = document.getElementById('task-input');

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${user.token}`, // Send token to prove identity
            },
            body: JSON.stringify({ text: textInput.value }),
        });

        if (response.ok) {
            textInput.value = ''; // Clear the input box
            getTasks(); // Refresh the list to show the new task
        }
    } catch (error) {
        console.error('Error adding task', error);
    }
});

// 5. Delete a Task
// We make this global so the inline onclick="deleteTask('id')" in HTML can find it
window.deleteTask = async (id) => {
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${user.token}`,
            },
        });

        if (response.ok) {
            getTasks(); // Refresh the list after deleting
        }
    } catch (error) {
        console.error('Error deleting task', error);
    }
};

// Start the app by grabbing the tasks!
getTasks();