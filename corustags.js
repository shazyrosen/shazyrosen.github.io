const track = document.querySelector('.carouseltext-track');

function loopCarousel() {
    const firstWord = track.firstElementChild; // Берем первый элемент
    track.style.transition = 'transform 0.5s ease-in-out'; // Анимация
    track.style.transform = 'translateY(-50px)'; // Смещаем вверх

    setTimeout(() => {
        track.appendChild(firstWord); // Перемещаем первый элемент в конец
        track.style.transition = 'none'; // Убираем анимацию
        track.style.transform = 'translateY(0)'; // Возвращаем в исходное положение
    }, 500); // Время синхронизировано с CSS-транзишеном
}

// Запускаем карусель каждые 2 секунды
setInterval(loopCarousel, 2000);