const track = document.querySelector('.carousel-track');
const logos = [...track.children];

// Дублируем логотипы для бесконечного эффекта
logos.forEach(logo => {
    const clone = logo.cloneNode(true);
    track.appendChild(clone);
});
