async function signUpForm(event) {
    event.preventDefault();
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    if (username && password) {
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify(body),
            headers: { 'Content-Type': 'application/json' }
        });
        if (response.ok) {
            //TODO: Take user to dashboard page
            console.log('success');
        } else {
            alert(response.statusText);
        }
    }
}

const registerBtn = document.getElementById('register-btn');
registerBtn.addEventListener('click', signUpForm());