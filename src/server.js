import express from 'express'
import initWebRoute from './route/web.js'
import configViewEngine from './configs/configViewEngine.js'
const port = process.env.PORT || 3000
import connection from './configs/connectDB.js'
import initApiRoute from './route/api.js'
const app = express()

//gửi data từ client lên serve import 2 dòng này
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
//

//set up views engine
configViewEngine(app)

//init web routes
initWebRoute(app)

// init api routes
initApiRoute(app)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})