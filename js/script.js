function numeroATexto(num) {
    const unidades = ['', 'UNO', 'DOS', 'TRES', 'CUATRO', 'CINCO', 'SEIS', 'SIETE', 'OCHO', 'NUEVE'];
    const decenas = ['', 'VEINTE', 'TREINTA', 'CUARENTA', 'CINCUENTA', 'SESENTA'];

    if (num < 20 || num > 60) {
        return '';
    }

    switch (num) {
        case 20:
            return decenas[1]; // VEINTE
        case 60:
            return decenas[5]; // SESENTA
        default:
            if (num > 20 && num < 30) {
                return 'VEINTI' + unidades[num - 20]; // VEINTIUNO, VEINTIDÓS...
            } else if (num >= 30 && num < 40) {
                return decenas[2] + (num > 30 ? ' Y ' + unidades[num - 30] : ''); // TREINTA
            } else if (num >= 40 && num < 50) {
                return decenas[3] + (num > 40 ? ' Y ' + unidades[num - 40] : ''); // CUARENTA
            } else if (num >= 50 && num < 60) {
                return decenas[4] + (num > 50 ? ' Y ' + unidades[num - 50] : ''); // CINCUENTA
            }
            break;
    }

    return ''; // Por defecto
}

function mostrarNumero(valor) {
    const numeroPalabras = numeroATexto(parseInt(valor)).toUpperCase(); // Asegúrate de que sea un número
    console.log("Número en palabras:", numeroPalabras); // Para depuración
    document.getElementById('numeroPalabras').textContent = numeroPalabras || ' '; // Asegura que haya un espacio en blanco si está vacío
    document.getElementById('valorActual').textContent = valor; // Mostrar valor actual

    // Calcular la posición del slider
    const slider = document.getElementById('numSlider');
    const sliderValue = document.querySelector('.slider-value');
    const percentage = (valor - slider.min) / (slider.max - slider.min);
    const sliderWidth = slider.offsetWidth;

    // Ajustar la posición del valor actual
    sliderValue.style.left = `${percentage * sliderWidth}px`; // Mueve el valor actual según el porcentaje
}

document.addEventListener('DOMContentLoaded', () => {
    mostrarNumero(20); // Valor inicial
});
