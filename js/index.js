document.addEventListener('DOMContentLoaded', () => {
    const apiKey = 'da5eec80f768fcca8e0ea859b7552855';
    let currentPage = 1;

    let botonAnterior = document.getElementById('prevPage')

    botonAnterior.classList.add('disabled');
    botonAnterior.disabled = true;


    async function fetchMovies(page) {
        const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${page}`;
        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            displayMovies(data.results);
        } catch (error) {
            console.error('Error fetching movies:', error);
            alert('Failed to fetch movies. Please try again later.');
        }
    }

    function displayMovies(movies) {
        const movieList = document.getElementById('movieList');
        movieList.innerHTML = '';

        movies.forEach(movie => {
            const movieCard = document.createElement('div');
            movieCard.className = 'card movie-card';
            movieCard.innerHTML = `

                <a class="p-lg-3 p-md-2 p-5" href="./pages/detalle.html">
                  <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}" class="h-100 img-fluid">
                </a>
                <div class="card-body">
                    <h5 class="card-title">${movie.title}</h5>
                </div>

        `;
            movieList.appendChild(movieCard);
        });
    }

    document.getElementById('nextPage').addEventListener('click', () => {
        currentPage++;
        fetchMovies(currentPage);
        habilitarBotones()
    });

    document.getElementById('prevPage').addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            fetchMovies(currentPage);
            habilitarBotones()
        }
    });

    function habilitarBotones() {
        if (currentPage === 1) {
            botonAnterior.classList.add('disabled');
            botonAnterior.disabled = true;
        }
        else {
            botonAnterior.classList.remove('disabled');
            botonAnterior.disabled = false;
        }
    }
    fetchMovies(currentPage);
});



//////////////////////////////REGISTRO///////////////////////////////////////////
document.getElementById('registrationForm').addEventListener('submit', (event) => {
    event.preventDefault();

    document.getElementById('nombreError').textContent = '';
    document.getElementById('apellidoError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('passwordError').textContent = '';
    document.getElementById('fechaNacimientoError').textContent = '';
    document.getElementById('paisError').textContent = '';
    document.getElementById('terminosError').textContent = '';

    let isValid = true;


    const nombre = document.getElementById('nombre').value;
    if (nombre === '') {
        isValid = false;
        document.getElementById('nombreError').textContent = 'El nombre es requerido';
    }


    const apellido = document.getElementById('apellido').value;
    if (apellido === '') {
        isValid = false;
        document.getElementById('apellidoError').textContent = 'El apellido es requerido';
    }


    const email = document.getElementById('email').value;
    if (email === '') {
        isValid = false;
        document.getElementById('emailError').textContent = 'El email es requerido';
    } else {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(email)) {
            isValid = false;
            document.getElementById('emailError').textContent = 'El email no es válido';
        }
    }

    const password = document.getElementById('password').value;
    if (password === '') {
        isValid = false;
        document.getElementById('passwordError').textContent = 'La contraseña es requerida';
    } else if (password.length < 6) {
        isValid = false;
        document.getElementById('passwordError').textContent = 'La contraseña debe tener al menos 6 caracteres';
    }


    const fechaNacimientoInput = document.getElementById('nacimiento');
    const fechaNacimientoError = document.getElementById('fechaNacimientoError');

    const fechaNacimiento = fechaNacimientoInput.value;

    if (!fechaNacimiento) {
        fechaNacimientoError.textContent = 'La fecha de nacimiento es requerida';
    } else {
        fechaNacimientoError.textContent = '';
    }

    const pais = document.getElementById('pais').value;
    if (pais === '') {
        isValid = false;
        document.getElementById('paisError').textContent = 'Escoge un Pais!';
    }

    const terminos = document.getElementById('terminos').checked;
    if (!terminos) {
        isValid = false;
        document.getElementById('terminosError').textContent = 'Debe aceptar los términos y condiciones';
    }


    if (isValid) {
        alert('Formulario de registro enviado exitosamente!');
    }
});



