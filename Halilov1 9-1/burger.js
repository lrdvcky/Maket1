function toggleMenu() {
  const menu = document.getElementById('menu');
  menu.classList.toggle('show');
}

let listImgslide = document.querySelectorAll('.review1');
const btnRight = document.querySelector('.next');
const sliderBlock = document.querySelector('.reviews');
const btnLeft = document.querySelector('.prev');

// Функция для обновления списка элементов
function updateSlider() {
    listImgslide = document.querySelectorAll('.review1'); // Обновляем список элементов
}

// Обработчик события для правой кнопки
btnRight.addEventListener('click', () => {
    updateSlider(); // Обновляем список элементов
    const lastReview = listImgslide[listImgslide.length - 1]; // Получаем последний элемент
    sliderBlock.prepend(lastReview.cloneNode(true)); // Клонируем и добавляем его в начало
    lastReview.remove(); // Удаляем последний элемент из оригинального списка
});

// Обработчик события для левой кнопки
btnLeft.addEventListener('click', () => {
    updateSlider(); // Обновляем список элементов
    const firstReview = listImgslide[0]; // Получаем первый элемент
    sliderBlock.append(firstReview.cloneNode(true)); // Клонируем и добавляем его в конец
    firstReview.remove(); // Удаляем первый элемент из оригинального списка
});


