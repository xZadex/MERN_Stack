const mongoose = require('mongoose');
const database = "jokes_db"

mongoose.connect(`mongodb://localhost/${database}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log(`Established a connection with ${database}`))
    .catch(err => console.log(`Something went wrong when connecting to ${database} `, err));