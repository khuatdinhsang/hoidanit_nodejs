// phụ trách tất cả  các route

import express from 'express'
import { getAllUserApi, createNewUserApi, deleteUserApi, updateUserApi } from '../controller/apiController.js'
let router = express.Router()
//  app la express app
const initApiRoute = (app) => {
    router.get('/users', getAllUserApi)
    router.post('/create-user', createNewUserApi)
    router.delete('/delete-user/:userId', deleteUserApi)
    router.put('/update-user/', updateUserApi)
    return app.use('/api/v1/', router)
}

export default initApiRoute