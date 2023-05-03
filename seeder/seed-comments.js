const db = require('../models')

async function seed() {
    // Get the place
    let place = await db.Place.findOne({ name: 'H-Thai-ML' })

    // Create a fake sample comment.
    let comment = await db.Comment.create({
        author: 'Ned Niles',
        rant: false,
        stars: 5.0,
        content: 'The curry was so good, it made me want to hug the chef and propose marriage on the spot.'
    })


    // Add that comment to the place's comment array.
    place.comments.push(comment.id)

    //save the place now that it has comment
    await place.save()
    
    // Exit the program
    process.exit()
}

seed()
