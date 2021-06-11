import express from 'express'
import morgan from 'morgan'
import pkg from '../package.json'
import {createRoles} from './libs/initialSetup'
import productsRoutes from './routes/products.routes'
import authRoutes from './routes/auth.routes'
import userRoutes from './routes/user.routes'

// Initializations
const app = express()
createRoles()

// Settings
app.set('title', 'api-products-roles')
app.set('port', process.env.PORT || 5000)
app.set('pkg', pkg)

// Middlewares
app.use(morgan('dev'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())

// Routes
app.get('/', (req, res) => {
    res.json({
        author: app.get('pkg').author,
        name: app.get('pkg').name,
        description: app.get('pkg').description,
        version: app.get('pkg').version
    })
})
app.use('/api/products', productsRoutes)
app.use('/api/auth', authRoutes)
app.use('/api/users', userRoutes)

export default app