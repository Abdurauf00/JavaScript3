//N1

//var i = 0
//
//while (i < 10) {
//    console.log(i);
//    i++
//}

//var i = 0;
//
//do {
//    console.log(i);
//    i++
//}while (i < 10 ) 

let bnn = prompt('Введите количество бананов')


for(let i = 1; i <= bnn; i++ ){
    if(i === 1) {
console.log(i + ' banana');
    }else{
        console.log(i + ' bananas');
    }
}


//N2

//let num = prompt('Введите сколько раз сработает цикл')
//
//let even = 0; // Чётное 
//let odd = 0;  // Нечётное
//
//for(let i = 0; i <=num; i++){
//    if(i %2 === 0) {
//        even++
//    console.log('Чётные числа ' + i);
//   }
//}


let number =prompt('Введите число');

let one = number * 1;

let sum = 0;

for(let i =2; i< number; i += 2  ){
    sum += i;
    
   }
   console.log('Сумма чётных чисел: ' + sum);

//N3


let first = prompt('Введите число')
let second = prompt('Введите степень')
 
let answer = 1;

for(let i = 1; i <= second; i++) {
    answer *=first;
}

alert('Ответ: ' + answer)