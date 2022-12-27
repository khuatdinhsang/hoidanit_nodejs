import pool from "../configs/connectDB.js"


export const getAllUserApi = async (req, res) => {
    const [rows, fields] = await pool.execute('select * from users');


    return res.status(200).json({
        message: 'ok',
        data: rows
    })
}
export const createNewUserApi = async (req, res) => {
    let { firstName, lastName, email, address } = req.body
    if (!firstName || !lastName || !email || !address) {
        return res.status(200).json({
            message: 'error',
        })
    }
    await pool.execute('insert into users(firstName,lastName,email,address) values(?,?,?,?)', [firstName, lastName, email, address])
    return res.status(200).json({
        message: 'ok',
    })
}
export const deleteUserApi = async (req, res) => {
    const id = req.params.userId
    if (!id) {
        return res.status(200).json({
            message: 'error',
        })
    }
    await pool.execute('delete from users where id =?', [id])
    return res.status(200).json({
        message: 'ok',
    })
}
export const updateUserApi = async (req, res) => {
    let { userId, firstName, lastName, email, address } = req.body
    if (!firstName || !lastName || !email || !address || !userId) {
        return res.status(200).json({
            message: 'error',
        })
    }
    await pool.execute('update users set firstName= ?, lastName=?, email=?,address=? where id = ?', [firstName, lastName, email, address, userId])
    return res.status(200).json({
        message: 'ok',
    })
}