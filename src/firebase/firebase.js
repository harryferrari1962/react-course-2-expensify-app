import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();

export {firebase, database as default};

// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key,snapshot.val());
// });

// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key,snapshot.val());
// });
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key,snapshot.val());
// });

// database.ref('expenses').push({
//   description: 'Another expense',
//   note: 'note',
//   amount: 550000,
//   createdAt: 12002345245
// });

// database.ref('expenses').on('value', (snapshot) => {
//   const user = snapshot.val();
//   const expenses = [];
//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });
//   console.log(expenses);
// });

// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });
//     console.log(expenses);
//   });



//database.ref('notes/-M6B-rBfn0k0VgNF7WOy').remove();

// database.ref('notes/-M6B-rBfn0k0VgNF7WOy').update ({
//   body: 'Buy Food'
// });
// database.ref('notes').push({
//   title: 'Course Topics',
//   body: 'Some more stuff'
// });
// database.ref().set({
//   name: 'Harry Ferrari',
//   age: 44,
//   stressLevel: 6,
//   job: {
//     title: 'CEO',
//     company: 'Ferrari Enterprises'    
//   },
//   location: {
//     city: 'Hanover',
//     country: 'USA'
//   }
// }).then(() => {
//   console.log('Initial value saved');
// }).catch((e) => {
//   console.log('Initial value failed.',e);
// });

// database.ref().on('value', (snapshot) => {
//   const user = snapshot.val();
//   console.log(`${user.name} is a ${user.job.title}`);
// });
// setTimeout(() => {
//   database.ref('job/title').set('Demigod');
// }, 3500);

// setTimeout(() => {
//    database.ref().off();
// }, 7000);

// // setTimeout(() => {
// //   database.ref('age').set(22);
// // }, 10500);

// // database.ref('location')
// //   .once('value')
// //   .then((snapshot) => {
// //     const val = snapshot.val();
// //     console.log(val);
// //   })
// //   .catch((e) => {
// //     console.log('error getting', e);
// //   });
// // database.ref().set({
// //   name: 'Harry Ferrari',
// //   age: 44,
// //   stressLevel: 6,
// //   job: {
// //     title: 'CEO',
// //     company: 'Ferrari Enterprises'    
// //   },
// //   location: {
// //     city: 'Hanover',
// //     country: 'USA'
// //   }
// // }).then(() => {
// //   console.log('Initial value saved');
// // }).catch((e) => {
// //   console.log('Initial value failed.',e);
// // });

// //  database.ref().update({
// //   stressLevel: 9,
// //   'job/company': 'Backoff Inc.',
// //   'location/city': 'Oklahoma City'
// //  });

// // database.ref().update({
// //   job: 'CEO',
// //   'location/city': 'Boston'
// // });
// // var x = database.ref('isMarried')
// //  .remove()
// //  .then(() => {
// //     console.log('ismarried deleted');
// //   })
// //   .catch((e) => {
// //     console.log('ismarried failed.',e);
// //  });