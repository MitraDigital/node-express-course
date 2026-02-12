// require('./db/connect')
const connectDB = require('./db/connect')
const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const Task = require('./models/task')
const notFound = require('./middleware/not-found')
const errorHandler = require('./middleware/error-handler')


const port = 3000
require('dotenv').config()

app.use(express.json())
app.use('/api/v1/tasks', tasks)
app.use(notFound)
app.use(errorHandler)

app.get('/hello', (req, res) => {
    res.send('Hello')
})
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL)
        app.listen(port, console.log(`listening ${port}`))
    } catch(err) {
        console.log(err)
    }
}

start()
