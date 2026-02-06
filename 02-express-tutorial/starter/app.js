////// midleware
/// LOGGER
// morgan middleware
const express = require('express')
const app = express()
const morgan = require('morgan')

// app.use(morgan('tiny'))
app.use(morgan('combined'))

app.get('/', (req, res) => {
    res.send('Home')
})

app.listen(5000)


// const express = require('express')
// const app = express()
// const logger = require ('./logger')
// app.use(logger)

// app.get('/',  (req, res) => {
//     res.send('Home')
// })
 

// app.listen(5000)



// const express = require('express')
// const app = express()

// const logger = (req, res, next) => {
//     console.log(req.method)
//     next()
// }
// app.get('/', logger, (req, res) => {
//     res.send('Home')
// })


// app.listen(5000)




// const express = require('express')
// const app = express()
// const { products } = require('./data.js') 

// app.get('/api/products', (req, res) => {
//     const newProducts = products.map((product => {
//         const { id, name, image } = product
//         return { id, name, image }
//     }))
//     res.status(200).json(newProducts)
// })

// app.get('/api/products/:productId', (req, res) => { 
//     const { productId } = req.params
//     const aProduct = products.find(product => product.id === Number(productId))
//     if (!aProduct) {
//         return res.status(404).send('Product does not exist')
//     }
//     return res.status(200).json(aProduct)
// })

// // search product
// app.get('/api/v1/query', (req, res) => {
//     console.log(req.query)
//     const { search, limit } = req.query

//     let sortedProducts = [...products]
//     if (search) {
//         sortedProducts = sortedProducts.filter(product => {
//             return product.name.startsWith(search)
//         }
//         )
//     }

//     if (limit) {
//         sortedProducts = sortedProducts.slice(0, Number(limit))
//     }

//     return res.status(200).json(sortedProducts)

// })

// app.listen(5000)


// // products data
// const express = require('express')
// const app = express()
// const { products }= require('./data.js')

// app.get('/', (req, res) => {
//     res.json(products)
// })

// app.listen(5000)



// /////// json response
// const express = require('express')
// const app = express()

// app.get('/', (req, res) => {
//     res.json({"name":'john', 'age': 30})
// })

// app.listen(5000)

// const express = require('express')
// const app = express()

// app.use(express.static('./public'))

// app.get('/', (req, res) => {
//     res.status(200).send('home')
// })

// app.all('*', () => {
//     res.status(404).send('<h1> no resource </h1>')
// })
// app.listen(5000)

// const http = require('http')
// const { readFileSync } = require('fs')

// // get all files


// const server = http.createServer((req, res) => {
//     const url = req.url
//     console.log(url)
//     if(url === '/') {
//         res.writeHead(200, {'content-type': 'text/html'})
//         res.write('homePage')
//         res.end()
//     }
// })

// server.listen(5000)
