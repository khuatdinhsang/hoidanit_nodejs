import pool from "../configs/connectDB.js"


export const getHomePage = async (req, res) => {
    // xu ly logic 
    const [rows, fields] = await pool.execute('Select * from users')
    return res.render('index.ejs', { dataUser: rows })
}
export const getAboutPage = (req, res) => {
    return res.send("t dep trai")
}
export const createNewUser = async (req, res) => {
    let { firstName, lastName, email, address } = req.body
    await pool.execute('insert into users(firstName,lastName,email,address) values(?,?,?,?)', [firstName, lastName, email, address])
    return res.redirect('/')
}

export const deleteUser = async (req, res) => {
    const id = req.body.userId
    console.log(id)
    await pool.execute('delete from users where id =?', [id])
    return res.redirect('/')
}
export const updateUser = async (req, res) => {
    const id = req.params.userId
    let [user] = await pool.execute('Select * from users where id = ?', [id])
    return res.render('update.ejs', { editUser: user[0], id: id })
}
export const postUpdateUser = async (req, res) => {
    let { userId, firstName, lastName, email, address } = req.body
    await pool.execute('update users set firstName= ?, lastName=?, email=?,address=? where id = ?', [firstName, lastName, email, address, userId])
    return res.redirect('/')
}
export const getDetailPage = async (req, res) => {
    const id = req.params.userId;
    let [user] = await pool.execute(`Select * from users where id = ?`, [id]);
    return res.render('detail.ejs', { user: user[0] })
}

