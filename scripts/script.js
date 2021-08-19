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

});