// Заголовок статьи состоит из букв и пробелов

// Нормализируем строку
// Разбиваем по слогам
// Сшиваем строку в разделителями

// Должно получиться top-10-benefits-of-react-framework

const title = 'Top 10 benefits of React framework';
const normalizedTitle = title.toLowerCase();
console.log(normalizedTitle);

const words = normalizedTitle.split(' ');
console.log(words);

const slug = words.join('-');
// console.log(slug);

const slug1 = title.toLowerCase().split(' ').join('-');
console.log(slug1);