// условие


// if(1 == '1') {
//     console.log('правильно');
// }else{
//     console.log('не правильно');
// }



// var a = prompt('введите слово привет');
// if(a == 'привет') {
//     console.log('молодец');
// }else{
//     console.log('холодец');
// }

// var mark = +prompt('введите свою оценку');

// if(mark == 5) {
//     console.log('Купим тебе Iphone');
// }else if(mark == 4){
//     console.log('купим Airpods');
// }else if(mark == 3){
//     console.log('ничего не купим');
// }else{
//     console.log('вы не ввели свою оценку');
// }

// var word = prompt('введите секретное слово')

// if( word == 'admin' || word == 'админ' ) {
//     console.log('Доступ открыт');
// }else{
//     console.log('Доступ закрыт');
// }

// && - оператор и

// var a = +prompt('введите первое число');
// var b = +prompt('введите второе число');

// if(a > b && !isNaN(a) && !isNaN(b) ) {
//     console.log(a + ' больше ' + b);
// }else if (b > a && !isNaN(a) && !isNaN(b)) {
//     console.log(b + ' больше ' + a);
// }else if (b == a && !isNaN(a) && !isNaN(b)) {
//     console.log(b + ' равен ' + a);
// }else{
//     console.log('вы ввели не число');
// }

//  || - оператор или
//  && - оператор и
//  ! - оператор не - ставиться перед переменной или функцией и возвращает противоположное значение
//  isNaN() - функция проверяет на NaN если внутри NaN то отдаст true иначе false

// Задание a

// var age = +prompt('введите свой возраст');

// if(age > 0 && age <= 18){
//     alert('Вы еще молоды, вам надо учиться');
// }else if(age > 18 && age <= 50){
//     alert('вам нужно работать')
// }else if(age > 50 && age <= 59){
//     alert('вам скоро на пенсию')
// }else if(age > 59 && age <= 100){
//     alert('вы пенсионер')
// }else{
//     alert('что-то пошло не так')
// }


// Задание b

// var time = +prompt('Какой сейчас час?');

// switch (time) {
//     case 24:
//         alert('12 часов ночи')
//         break;
//     case 1:
//         alert('1 час утра')
//         break;
//     case 2:
//         alert('2 часа утра')
//         break;
//     case 3:
//         alert('3 часа утра')
//         break;
//     case 4:
//         alert('4 часа утра')
//         break;
//     case 5:
//         alert('5 часов утра')
//         break;
//     case 6:
//         alert('6 часов утра')
//         break;
//     case 7:
//         alert('7 часов утра')
//         break;
//     case 8:
//         alert('8 часов утра')
//         break;
//     case 9:
//         alert('9 часов дня')
//         break;
//     case 10:
//         alert('10 часов дня')
//         break;
//     case 11:
//         alert('11 часов дня')
//         break;
//     case 12:
//         alert('12 часов дня')
//         break;
//     case 13:
//         alert('1 час полудня')
//         break;
//     case 14:
//         alert('2 часа полудня')
//         break;
//     case 15:
//         alert('3 часа полудня')
//         break;
//     case 16:
//         alert('4 часа полудня')
//         break;
//     case 17:
//         alert('5 часов полудня')
//         break;
//     case 18:
//         alert('6 часов полудня')
//         break;
//     case 19:
//         alert('7 часов вечера')
//         break;
//     case 20:
//         alert('8 часов вечера')
//         break;
//     case 21:
//         alert('9 часов вечера')
//         break;
//     case 22:
//         alert('10 часов вечера')
//         break;      
//     case 23:
//         alert('11 часов вечера')
//         break;       
//     default:
//         alert('вы ввели неправильно')
//         break;
// }


var number1 = +prompt('введите первое число');
var number2 = +prompt('введите второе число');
var number3 = +prompt('введите третье число');

if(number1 > number2 < number3) {
    alert(' среднее число ' + number2)
}else if(number2 > number1 < number3){
    alert(' среднее число ' + number1)
}else if(number2 > number3 < number1){
    alert(' среднее число ' + number3)
}