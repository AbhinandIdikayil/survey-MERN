import express from 'express'
import cors from 'cors'
import { corsOption, PORT } from './config/dotenv'
import { routes } from './routes/routes'
import { connectDB } from './config/connection'
import { errorHandler } from './utils/errorHandler'
import parser from 'cookie-parser'
const app = express()

app.use(parser())
app.use(express.json())
app.use(cors(corsOption))

app.use('/api', routes)
app.use(errorHandler)


app.listen(Number(PORT), async () => {
    await connectDB()
    console.log('server is running on port:', PORT)
})

