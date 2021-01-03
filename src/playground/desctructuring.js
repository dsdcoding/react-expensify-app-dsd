// const person = {
//     name: 'Daniel',
//     age: '30',
//     location: {
//         city: 'Toronto',
//         temp: 92
//     }
// };

// //new way to pull from a const (this is used for getting data from APIs)
// ///the name = Annonymous is telling the code if there is no name in the above, then it will default Annonymous if there is no data for it
// const {name: firstName = 'Annonymous', age} = person;
// console.log(`${firstName} is ${age}.`);

// ///another example of descructuring but within another child (location)
// const {city, temp: tempature} = person.location;
// //the temp: temperature, the : gives it a new name
// if (city && tempature) {
//     console.log(`It's ${tempature} in ${city}.`);
// };

// another example to test descructuring
// const  book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const {name: publisherName = 'Self-Published'} = book.publisher
// console.log(publisherName);

// Array Destrucuturing examples (the above examples is object descruturing)

const address = ['1299 S Juniper Street', 'Toronto', 'Ontario', 'M5G1Z3'];
const [, city, state = 'New York'] = address;
console.log(`You are in the ${city} ${state}.`);

const item = ['Coffee (iced)', '$3.00', '$3.50', '$3.75'];
const [itemName,,mediumPrice] = item;
console.log(`A medium ${itemName} costs ${mediumPrice}`);