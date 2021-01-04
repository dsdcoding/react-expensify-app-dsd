//Promises help us sync our asynchronise data into the database
//FIREBASE DOES NOT store arrays
import * as firebase from 'firebase'; //* as means it takes everything from firebase and label it under firebase

const config = {
    apiKey: "AIzaSyCZ2j7HyRaZ3FbyP_7Gpps8CtVNxU7M3FY",
    authDomain: "expensify-fdaf1.firebaseapp.com",
    databaseURL: "https://expensify-fdaf1-default-rtdb.firebaseio.com",
    projectId: "expensify-fdaf1",
    storageBucket: "expensify-fdaf1.appspot.com",
    messagingSenderId: "351815397628",
    appId: "1:351815397628:web:9d7efde4758848bd5d2779",
    measurementId: "G-59P3KPXB2C"
  };

firebase.initializeApp(config);

const database = firebase.database();

//to add the google provider for sign-in
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default};

// NOTES TO LEARN: 
// //child_removed .. this is where when there is a removed to one of the items in the database, it notifies

// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// //child_changed .. this is where when there is a child_changed to one of the items in the database, it notifies
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// //child_added .. this will notify everytime a child is ADDED to the database
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').once('value').then((snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//         expense.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });

//     console.log(expenses)
// });

// database.ref('expenses').on('value', (snapshout) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//         expense.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });

//     console.log(expenses)
// });

// database.ref('expenses').push({
//     description: 'Rent',
//     notes: '',
//     amount: 109500,
//     createdAt: 695465498478
// });




//push is to create a new reference property
// database.ref('notes').push({
//     title: 'Course Topics',
//     body: 'React Native, Angular, Python'

// });


//you NEED snapshot in order to print the message
// database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// })

// //example of how you go "ON" to change data and fetch data from server, then when your done you go "OFF"
// //this allows to pull the data from the server, and then notify every time its been updated
// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// }, (e) => {
//     console.log('Error with data fetching', e);
// });

// setTimeout(() => {
//     database.ref('age').set(29);
// }, 3500);

// setTimeout(() => {
//     database.ref().off(onValueChange);   //this cancels or stops all the subscriptions and notifications from server
// }, 7000);

// setTimeout(() => {
//     database.ref('age').set(30);
// }, 10500);

// //fetching data from the database example
// database.ref('location/city')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();      //snapshot is what requests the data from the server
//         console.log(val);
//     })
//     .catch((e) => {
//         console.log('Error fetching data', e);
//     })

// //example
// database.ref().set({
//       name: 'Daniel',
//       age: 30,
//       stressLevel: 6,
//       job: {
//           title: 'Software Developer',
//           company: 'Google'
//       },
//       location: {
//           city: 'Toronto',
//           country: 'Canada'
//       }
//   }).then(() => {
//       console.log('Data is saved!!');
//   }).catch((e) => {
//     console.log('This failed.', e);
//   });

//   //updating database
//   database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
// });



//this is a way to update the database without editing other information or add new stuff or even delete by null
//   database.ref().update({
//     job: 'Manager',
//     'location/city': 'Brampton'
// });

//example below how to remove data in a database
// database.ref('job').remove()
//   .then(() => {
//       console.log('Single Data Removed');
//   }).catch((e) => {
//     console.log('Single Data didnt remove', e);
//   });

//example below
// //   database.ref().set('This is my data.');  

// //.ref() is the reference in the databse (like cabinets in a dresser
// // database.ref('age').set(31);
// // database.ref('location/city').set('Richmond Hill');

//   database.ref('isSingle').set(null);  //this is another way to remove data

// database.ref('attributes').set({
//     height: 73,
//     weight: 180
// }).then(() => {
//     console.log('Second set call worked.')
// }).catch((e) => {
//     console.log('Things didnt work for the second error', e);
// });

// console.log('I made a request to change the data.');