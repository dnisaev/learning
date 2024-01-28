alert('Привет, давай сыграем в морской бой?');
alert('Мой корабль состоит из 3 палуб и находится на поле из 10 ячеек.');
alert('Разбей его!');

const location1 = 3;
const location2 = 4;
const location3 = 5;

let hits = 0;
let isSunk = false;
let attempt;

while(isSunk === false){
    attempt = +prompt('Стреляй! Введи значение от 0 до 10');
    if (attempt === location1 || attempt === location2 || attempt === location3){
        alert('Попал!');
        hits += 1;
        if (hits === 3) {
            isSunk = true;
            alert('Ты разбил мой корабль! :(');
        }
    } else {
        alert('Промахнулся!');
    }
}