const theOneSDK = require('cal-sdk')

// Get all books
const allBooks = await theOneSDK.Books.getAll()
console.log(JSON.stringify(allBooks, null, 2))
