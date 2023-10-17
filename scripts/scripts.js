let page = document.querySelector('.page'); // Записываем обращение к сайту, через селектор '.page' в переменную
let themeButton = document.querySelector('.theme_button'); // Записываем обращение к кнопке, через селектор '.theme_button' в переменную
themeButton.onclick = function(){ // Записываем в функцию обработчик события onclick(Просто нажатие)
    page.classList.toggle('page_Light'); //Если светлой темы не стоит, то ставим светлую
    page.classList.toggle('dark'); // Если темная тема не стоит, то ставим ее
}