// Напиши скрипт поиска самого маленького числа в массиве
// при условии что числа уникальные(не повторяются)

const numbers = [51, 18,13, 24, 7, 85, 19];
let smallestNumber = numbers[0] ;

// Положили перед собой первую монетку, и считаем ее
// самой маленькой(51)

// console.log(smallesNumber);//51

// Дальше достаем по одной и сравниваем в первой

for (const number of numbers){
   console.log(number);
//    Если монетка меньше , той которую мы достали первой(51)
//    то на данной итерации это и есть самая маленькая, и так до
//    конца перебора

if(number < smallestNumber){
    // smallestNumber = number;

// Находим самую большую монетку

if(number > smallestNumber){
        // smallestNumber = number;
} 
}
// console.log( 'smallestNumber:',smallestNumber);
}




