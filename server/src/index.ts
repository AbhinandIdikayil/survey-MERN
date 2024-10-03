import express from 'express'
import cors from 'cors'
import { PORT } from './config/dotenv'
import { routes } from './routes/routes'
import { connectDB } from './config/connection'
import { errorHandler } from './utils/errorHandler'

const app = express()
app.use(express.json())
app.use(cors())

app.use('/api', routes)

app.use(errorHandler)

app.listen(PORT, async () => {
    await connectDB()
    console.log('server is running on port:', PORT)
})

