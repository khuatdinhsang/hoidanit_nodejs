// phụ trách tất cả  các route

import express from 'express'
import { getHomePage, getAboutPage, createNewUser, getDetailPage, deleteUser, updateUser, postUpdateUser } from '../controller/homeController.js'
let router = express.Router()
//  app la express app
const initWebRoute = (app) => {
    router.get('/', getHomePage)
    router.get('/detail/user/:userId', getDetailPage)
    router.get('/about', getAboutPage)
    router.post('/delete', deleteUser)
    router.get('/update/:userId', updateUser)
    router.post('/update-user', postUpdateUser)
    router.post('/create-new-user', createNewUser)
    return app.use('/', router)
}

export default initWebRoute