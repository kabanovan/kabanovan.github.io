// Получаем элементы
const showBtn = document.getElementById('showCastBtn');
const popup = document.getElementById('castPopup');
const overlay = document.getElementById('popupOverlay');
const closeBtn = document.getElementById('closePopupBtn');

// Функция открытия попапа
function openPopup() {
    popup.classList.add('show');
    overlay.classList.add('show');
    document.body.style.overflow = 'hidden'; // запрещаем прокрутку фона
}

// Функция закрытия попапа
function closePopup() {
    popup.classList.remove('show');
    overlay.classList.remove('show');
    document.body.style.overflow = ''; // возвращаем прокрутку
}

// Обработчики событий
showBtn.addEventListener('click', openPopup);
closeBtn.addEventListener('click', closePopup);
overlay.addEventListener('click', closePopup);

// Закрытие по Escape
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && popup.classList.contains('show')) {
        closePopup();
    }
});