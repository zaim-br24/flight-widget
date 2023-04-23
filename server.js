const dotenv = require('dotenv').config()
const cors = require("cors")
const express = require("express")
const axios = require('axios')

const app = express();
app.use(cors())


app.get('/flights', (req, res)=> {
    const options = {
        url: `${process.env.URL}?page-size=6`,
        headers : {
            accept: 'application/json',
            'X-Cassandra-Token': process.env.TOKEN
        }
    }
    axios.request(options).then(response => {
        console.log(response.data)
        res.json(response.data)
    }).catch(error => console.log(error) )
})

const PORT = 5000;
app.listen(PORT , ()=> console.log("Server Running on port "+ PORT))
