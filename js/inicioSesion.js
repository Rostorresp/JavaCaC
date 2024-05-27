document.getElementById('loginForm').addEventListener('submit', (event) => {
    event.preventDefault();

    // Limpiar mensajes de error
    document.getElementById('loginEmailError').textContent = '';
    document.getElementById('loginPasswordError').textContent = '';

    let sesionValid = true;

    const loginEmail = document.getElementById('loginEmail').value;
    if (loginEmail === '') {
        sesionValid = false;
        document.getElementById('loginEmailError').textContent = 'El email es requerido';
    } else {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(loginEmail)) {
            sesionValid = false;
            document.getElementById('loginEmailError').textContent = 'El email no es válido';
        }
    }

    const loginPassword = document.getElementById('loginPassword').value;
    if (loginPassword === '') {
        sesionValid = false;
        document.getElementById('loginPasswordError').textContent = 'La contraseña es requerida';
    } else if (loginPassword.length < 6) {
        sesionValid = false;
        document.getElementById('loginPasswordError').textContent = 'La contraseña debe tener al menos 6 caracteres';
    }

    if (sesionValid) {
        alert('Inicio de sesión exitoso!');
    }
});


