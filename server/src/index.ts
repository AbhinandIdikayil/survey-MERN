import express from 'express'
import cors from 'cors'
import { PORT } from './config/dotenv'
import { routes } from './routes/routes'

const app = express()
app.use(express.json())
app.use(cors())

app.use('/api', routes)

app.listen(PORT, () => {
    console.log('server is running on port:', PORT)
})

