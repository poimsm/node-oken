const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const path = require('path')

// app.use(cors)

app.use('/', require('./routes/index'))
// app.use(require('./routes/index'))


app.listen(process.env.PORT || 3000, () => {console.log('HOOOLA?33')})