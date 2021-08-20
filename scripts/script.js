$(document).ready(function () {
    //объявили переменную для этажа c начальным значением
    var currentFloor = 2;
    //переменная для этажа
    var floorPath = $('.building__image path');
    //переменные для кнопок вверх.вниз
    var counterUp = $('.counter_up');
    var counterDown = $('.counter_down');

    //при наведении мышкой по этажу, вызываем функцию
    floorPath.on('mouseover', function () {
        //очищение от класса, который придает стили этажу
        floorPath.removeClass('current-floor');
        //присваиваем переменной значение на какаой именно этаж, через аттрибут data-floor
        currentFloor = $(this).attr('data-floor');
        //присваиваем counter текст из currentFloor, т.е. высветится число на какой этаж мы нажали
        $('.counter').text(currentFloor);
    });

    counterUp.on('click', function () {
        //условие, чтобы увеличивалось не больше 18
        if (currentFloor < 18) {
            //увеличиваем счётчик на единицу
            currentFloor++;
            //приводим к виду 02, 03 и т.д.
            uscurrentFloor = currentFloor.toLocaleString('en-US', { minimumIntegerDigits: 2, useGroupping: false });
            //вставляем в каунтер нашу новую отформатированную переменную uscurrentFloor
            $('.counter').text(uscurrentFloor);
            //---подсветка этажей по клику на счётчике
            //создаем в css класс current-floor, задаем ему стлиь видимости 1
            //изначально перед каждый кликом удаляем этот класс
            floorPath.removeClass('current-floor');
            //по клику на счётчик - добавляется класс со стилями
            $(`[data-floor = ${uscurrentFloor}]`).toggleClass('current-floor');
        }
    });
    counterDown.on('click', function () {
        //условие не меньше 2
        if (currentFloor > 2) {
            //уменьшаем счётчик на единицу
            currentFloor--;
            //приводим к виду 02, 03 и т.д.
            uscurrentFloor = currentFloor.toLocaleString('en-US', { minimumIntegerDigits: 2, useGroupping: false });
            //вставляем в каунтер нашу новую отформатированную переменную uscurrentFloor
            $('.counter').text(uscurrentFloor);
            //---подсветка этажей по клику на счётчике
            //создаем в css класс current-floor, задаем ему стлиь видимости 1
            //изначально перед каждый кликом удаляем этот класс
            floorPath.removeClass('current-floor');
            //по клику на счётчик - добавляется класс со стилями
            $(`[data-floor = ${uscurrentFloor}]`).toggleClass('current-floor');

        }
    });

    /* ------Modal Window */

    var modal = $('.modal');
    var buttonPrimary = $('.button__primary');
    var modalCloseBtn = $('.modal__close-btn');

    //функция переключения классов к мод.окну
    function modalToggle() {
        modal.toggleClass('modal_open');
    };

    //по клику вызываем функцию окрытия/закрытия мод.окна
    floorPath.on('click', modalToggle);
    buttonPrimary.on('click', modalToggle);
    modalCloseBtn.on('click', modalToggle);


    /*----- JS */
    /*
    const modal = document.querySelector('.modal');
    const buttonPrimary = document.querySelector('.button__primary');
    const modalCloseBtn = document.querySelector('.modal__close-btn');

    const modalToggle = (event) => {
        event.preventDefault();
        modal.classList.toggle('modal_open');
    };

    floorPath.on('click', modalToggle);
    buttonPrimary.addEventListener('click', modalToggle);
    modalCloseBtn.addEventListener('click', modalToggle);
    */


    /* ------ Flats JS */

        const flatsPath = document.querySelectorAll('.flats path');
        const flatItem = document.querySelectorAll('.flat__item');

        const chooseFlatImg = () => {
            flatsPath.forEach((img) => {

                img.addEventListener('click', (event) => {
                    const target = event.target;
                    const flatImg = img.dataset.flat;
                    if (target.classList.contains('current-flat')) {
                        target.classList.remove('current-flat');
                    } else {
                        target.classList.add('current-flat');
                    }

                    flatItem.forEach((room) => {
                        const roomNum = room.dataset.flatId;
                        if (flatImg === roomNum) {
                            room.classList.toggle('current-item');
                        }
                    });
                });
            });
        };

        const chooseFlat = () => {
            flatItem.forEach((item) => {
                item.addEventListener('click', () => {

                    if (item.classList.contains('current-item')) {
                        item.classList.remove('current-item');
                    } else {
                        item.classList.add('current-item');
                    }

                    flatsPath.forEach((img) => {
                        if (img.dataset.flat === item.dataset.flatId) {
                            img.classList.toggle('current-flat');
                        }
                    })
                })
            })
        };

        chooseFlatImg();
        chooseFlat();

});

