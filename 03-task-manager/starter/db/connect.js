const mongoose = require('mongoose')

// const connectionString = 'mongodb+srv://kushan:1234@nodeexpressprojects.deq6n6m.mongodb.net/TASK-MANAGER-DB?appName=NodeExpressProjects'

const connectDB = (url)=>{
    return mongoose
        .connect(url, 
            {
                useNewUrlParser: true,
                useCreateIndex: true,
                useFindAndModify: false,
                useUnifiedTopology: true
            })
}

module.exports = connectDB
// mongoose
//     .connect(connectionString, 
//         {
//             useNewUrlParser: true,
//             useCreateIndex: true,
//             useFindAndModify: false,
//             useUnifiedTopology: true
//         })
//     .then(() => console.log('db connected'))
//     .catch((err) => console.log(err) )

// module.exports = connectionString