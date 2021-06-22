const mongoose = require('mongoose')

mongoose.connect("mongodb://db:27017/mydatabase")
.then(db => console.log('DB IS CONECTENTEDDDDDDD', db.connection.host, 'HOST'))
.catch(err => console.log('WE GOT AN ERRRRRORRRRR3333',{err}))
