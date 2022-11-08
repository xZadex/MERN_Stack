const mongoose = require('mongoose')
const database = 'product_manager'

mongoose.connect(`mongodb://localhost/${database}`,{
    useNewURLParser: true,
    useUnifiedTopology: true
})
.then(() => console.log(`You have established a connection to ${database} database`))
.catch((err) => console.log(`Error establishing a connection to ${database} database`))