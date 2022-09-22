

// Напиши скрипт проверки подписки пользователя при доступе к контакту
// Есть три типа подписки: free, pro, and Vip.
// Получить доступ могут только пользователи pro and vip

// const sub = 'pro';
// const sub = 'vip';
// const sub = 'free';

// Если пользователь pro or vip, тогда есть доступ. 

const canAccesContent = sub === 'pro' || sub === 'vip';
// true || false => true
// false || true => true
// false || false => false
console.log(`Есть доступ к контакту`, canAccesContent)