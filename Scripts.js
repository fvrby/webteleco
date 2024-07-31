// Animación de fondo con círculos en movimiento
const createCircle = () => {
    const circle = document.createElement('div');
    circle.classList.add('circle');
    document.body.appendChild(circle);

    circle.style.left = `${Math.random() * 100}vw`;
    circle.style.top = `${Math.random() * 100}vh`;
    circle.style.width = `${Math.random() * 50 + 10}px`;
    circle.style.height = circle.style.width;

    setTimeout(() => {
        circle.remove();
    }, 10000);
};

setInterval(createCircle, 500);
