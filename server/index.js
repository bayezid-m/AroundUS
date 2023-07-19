const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const User = require('./model/user')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')


app.use(cors())
app.use(express.json())
//mongoose.connect('mongodb://localhost:27017/social')
const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/arroundUs');
        console.log('DB is connected');
    } catch (error) {
        console.log(error);
    }
};



app.post('/api/register', async (req, res) => {
    console.log(req.body)
    try {
        //const newPassword = await bcrypt.hash(req.body.password, 10)
        await User.create({
            first_name: req.body.firstName,
            last_name: req.body.lastName,
            email: req.body.email,
            password: req.body.password,
            status: req.body.status,
            occupation: req.body.occupation,
            image: req.body.imageSender,
        })
        res.json({ status: 'ok' })
    } catch (error) {
        res.json(error)
        console.log(error);
    }
})

app.post('/api/login', async (req, res) => {
    const user = await User.findOne({
        email: req.body.email,
    })

    if (!user) {
        return { status: 'error', error: 'Invalid login' }
    }

    const isPasswordValid = await bcrypt.compare(
        req.body.password,
        user.password
    )

    if (isPasswordValid) {
        const token = jwt.sign(
            {
                id: user._id,
                name: user.name,
                email: user.email,
            },
            'secret123'
        )

        return res.json({ status: 'ok', user: token })
    } else {
        return res.json({ status: 'error', user: false })
    }
})

app.get('/api/users', async (req, res) => {
    //const token = req.headers['x-access-token']
    try {
        //const decoded = jwt.verify(token, 'secret123')
        //const email = decoded.email
        const user = await User.find()
        return res.json({ status: 'ok', user: user })
    } catch (error) {
        console.log(error)
        res.json({ status: 'error', error: 'invalid token hr' })
    }
})

app.listen(2000, () => {
    console.log('Server is running on port 2000.');
    connectDB();

})