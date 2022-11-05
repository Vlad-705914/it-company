// Напиши скрипт который заменяет регистр каждого символа

// в строке на противоположный.
// Например, если строка «JavaScript», 
// то превращается в «jAVAsCRIPT»

// const string = 'JavaScript';
// // Развиваем строку посимвольно
// const letters = string.split('');
// let invertedString = '';
// console.log(letters);//['J', 'a', 'v', 'a', 
// // 'S', 'c', 'r', 'i', 'p', 't']
// for( const letter of letters){
    // console.log(letter);

    // if(letter === letter.toLowerCase()){
    //     console.log('This is letter in toLowerCase!!!', letter);

    //     invertedString += letter.toUpperCase();
    // }else{
    //     console.log('This is letter in toUpperCase!!!', letter);
    //     invertedString += letter.toLowerCase();
    // }
// Делаем это с помощью тернарника
// const isEgual = letter ===  letter.toLowerCase();
// // invertedString += letter === letter.toLowerCase() ?
// invertedString += isEgual?
// letter.toUpperCase() : letter.toLowerCase();
// }
// console.log(invertedString);

const string = 'Javascript';


// Разбиваем по символьно

const letters = string.split('');
// создаем пустую переменную с разделителем
let inversString = '';
// Перебираем строку
for(const letter of letters){
    //  ставим строку в нижний регистр

    if(letter === letter.toLowerCase()){
console.log('This is string', letter);
// собираем новую строку в нижнем регистре
inversString += letter.toUpperCase();  

}else{
    console.log('This is toUpperCase', letter);
    inversString += letter.toLowerCase(); 

}

} 
console.log(inversString);


