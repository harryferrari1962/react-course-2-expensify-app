// // console.log('destructuring');

// // const person = {
// //   name: 'harry',
// //   age: 57,
// //   location: {
// //     city: 'hanover',
// //     temp: 47
// //   }
// // };

// // const {name,age,location} = person; 
// // console.log(`${name} is ${age}. ${location.city} is ${location.temp} degrees`)

// const book = {
//   title: 'title',
//   author: 'author',
//   publisher: {
//     nafme: 'publisher'
//   }
// };

// const {name: publisherName = 'Self-Published'} = book.publisher;
// console.log(`Publisher is ${publisherName}`);

const address = ['1911 mount hope court','Hanover','MD','21076'];
const [street, city, state = 'default', zip] = address;
console.log(`you are in ${city} ${state}`);

const item = ['Coffee','$2.00','$2.50','$2.75'];
const [itemName, , medium] = item;
console.log(`a medium ${itemName} costs ${medium}`);
