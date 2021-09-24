const userName = document.getElementById('username_login');
const password = document.getElementById('pass_login');
const submitBtn = document.getElementById('create-btn');
const loginBtn = document.getElementById('loginBtn');
const createUsername = document.getElementById('username_create');
const createPassword = document.getElementById('pass_create');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');

let userLat = 0;
let userLon = 0;

// -------------------------------- Get Lat/Long Function --------------------------------

navigator.geolocation.getCurrentPosition(function (position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    userLat = lat.toFixed(2);
    userLon = lon.toFixed(2);
    console.log(`The coordinates for this location are: ${userLat}, ${userLon}`);
});

// -------------------------------- Create User Function --------------------------------

submitBtn.addEventListener('click', (event) => {
    event.preventDefault();

    const body = {};

    if (createUsername.value.length && createPassword.value.length) {
        body.username = createUsername.value;
        body.password = createPassword.value;
        body.first_name = firstName.value;
        body.last_name = lastName.value;
        body.email = email.value;

        try {
            fetch('/api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
            })
                .then((res) => res.json())
                .then((result) => {
                    console.log(result);
                    document.location.replace(`/users/${body.username}/${userLon}/${userLat}`);
                });
        } catch (err) {
            throw new Error(err);
        }
    } else {
        window.alert('Please enter your username and password');
        return;
    }

    try {
        fetch('/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        })
            .then((res) => res.json())
            .then((result) => {
                window.location.href = "file:///C:/Users/email/Homework/Klettersteig-TeamProject-HikingApp/views/layouts/index.html";
                console.log(result);
            });
    } catch (err) {
        throw new Error(err);
    }

});

// -------------------------------- Handle Login Function --------------------------------

const handleLogin = async (username, password) => {
    const body = {
        username: username,
        password: password,
    };
    console.log(body);

    if (body.username.length && body.password.length) {
        const response = await fetch(`/api/users/sign-in/${username}`, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: { 'Content-Type': 'application/json' },
        }).then((res) => res.json());
        console.log(response);
        if (response != 'invalid username or password') {
            document.location.replace(`/users/${username}/${userLon}/${userLat}`);
        } else {
            alert('Failed to log in. Please try again.');
        }
    } else {
        alert('Please enter your username and password.');
    }
};

loginBtn.addEventListener('click', (event) => {
    event.preventDefault();
    handleLogin(userName.value, password.value);
});

function openForm() {
    document.getElementById('myForm').style.display = 'block';
};

function closeForm() {
    document.getElementById('myForm').style.display = 'none';
};