const express = require('express')
const mongoose = require('mongoose')
const bodyparser = require('body-parser')
const cors = require('cors')
const bcrypt = require('bcrypt');
const app = express()
const port = 3000
const User = require('./models/user')

const URL="mongodb://127.0.0.1:27017/reactdb"
    mongoose.connect(URL)
    .then(() => console.log("Database connected..."))
    .catch((err) => console.log(err))

app.use(express.json())
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(cors());

app.post('/signup', (req, res) => {
    const user = new User(req.body)

    const saltRounds = 10;
    const myPlaintextPassword = 's0/\/\P4$$w0rD%$@)^&*(^%$';
    
    bcrypt.hash(myPlaintextPassword, saltRounds, async function (err, hash) {
        // Store hash  password in the DB.
        user.password = hash;
        await user.save()
            .then(data => {
                console.log(data)
                res.json(data)
            })
            .catch(err => {
                res.json({ message: err })
                console.log(err)
            })
    })
})

app.post('/login', async(req, res) => {
    await User.find({ email: req.body.email, password: req.body.password })
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.json({ message: err })
            console.log(err)
        })
})

app.listen(port , () => {
    console.log(`Example app listening on port ${port}!`)
})