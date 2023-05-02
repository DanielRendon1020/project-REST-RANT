const db = require('../models')

db.Place.create([{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: '/images/H-Thai-ML.jpg',
    founded: 1995
}, {
    name: 'Coding Cat Cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: '/images/coding-cat-cafe.jpg',
    founded: 2022
}])
.then(() => {
    console.log('Success!')
    process.exit()
})
.catch(err => {
    console.log('NOPE!', err)
    process.exit()
})