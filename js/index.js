let miTexto = document.querySelector('#subtitulo');
const palabras = ["campeón web", "desarrollador", "freelancer"];
let i = 0;
let timer;

function efectoEscritura() {
    let palabra = palabras[i].split("");
    var escribir = function () {
        if (palabra.length > 0) {
            miTexto.innerHTML += palabra.shift();
        } else {
            efectoBorrado();
            return false;
        };
        timer = setTimeout(escribir, 300);
    };
    escribir();
};

function efectoBorrado() {
    let palabra = palabras[i].split("");
    var borrar = function () {
        if (palabra.length > 0) {
            palabra.pop();
            miTexto.innerHTML = palabra.join("");
        } else {
            if  (palabras.length > (i + 1)) {
                i++;
            } else {
                i = 0;
            };
            efectoEscritura();
            return false;
        };
        timer = setTimeout(borrar, 300);
    };
    borrar();
};

efectoEscritura();

let botones = document.querySelectorAll('.menu ul li');
let secciones = document.querySelectorAll('section');

botones.forEach((boton) => {
    let current = '';
    boton.addEventListener('click', () => {
        botones.forEach((boton) => {
            boton.classList.remove('activo');
        });
        boton.classList.add('activo');
        current = boton.dataset.menu;
        secciones.forEach((sec) => {
            sec.classList.remove('activo');
        });
        document.querySelector('#' + current).classList.add('activo');
    });
});

let contactarme = document.querySelector('#contactarme');

contactarme.addEventListener('click', () => {
    secciones.forEach((seccion) => {
        seccion.classList.remove('activo');
    });

    botones.forEach((boton) => {
        boton.classList.remove('activo');
        document.querySelector('[data-menu~="contacto"]').classList.add('activo');
    });
    document.querySelector('#contacto').classList.add('activo');
});

let numeros = document.querySelectorAll('.progreso .num'),
    porcentaje = document.querySelectorAll('.progreso .porcentaje-de-progreso'),
    valorInicial = Array(numeros.length),
    intervalos = Array(numeros.length),
    speed = 75;
    valorInicial.fill(0);

numeros.forEach((num, i) => {
    intervalos[i] = setInterval(() => {
        if (valorInicial[i] === parseInt(num.dataset.num)) {
            clearInterval(intervalos[i]);
        } else {
            valorInicial[i] += 1;
            num.innerHTML = `${valorInicial[i]}%`
            porcentaje[i].style.background = `conic-gradient(
                    #7aacf7 ${valorInicial[i] * 3.6}deg,
                    #eeeeee ${valorInicial[i] * 3.6}deg
                )`;
        }
    }, speed);
});