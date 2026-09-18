// Получаем элементы
const showBtn = document.getElementById('showCastBtn');
const popup = document.getElementById('castPopup');
const overlay = document.getElementById('popupOverlay');
const closeBtn = document.getElementById('closePopupBtn');
const castList = document.getElementById('castList');
const table = document.querySelector('.cast-full-list');
	
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

// Автозаполнение списка актёров
document.addEventListener('DOMContentLoaded', function() {
    if (table && castList) {
        const rows = table.querySelectorAll('tr');
        const actors = [];
        // Берём первые три строки (если их меньше – все доступные)
        for (let i = 0; i < Math.min(3, rows.length); i++) {
            const firstTd = rows[i].querySelector('td:first-child');
            if (firstTd) {
                actors.push(firstTd.innerHTML.trim()); // сохраняем ссылки, если они есть
            }
        }
        castList.innerHTML = actors.join(', ');
    }
});
