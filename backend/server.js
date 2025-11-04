require('dotenv').config()


const express = require("express")

const app = express()

const cors = require('cors')

app.use(cors(
     {
         origin: ['https://fullstack-deployment-six.vercel.app']
     }
))
app.get("/api/jokes", (req, res) => {

    const jokes = [
        {
            "id": 1,
            "joke": "Why don't programmers like nature? It has too many bugs."
        },
        {
            "id": 2,
            "joke": "How do you comfort a JavaScript bug? You console it."
        },
        {
            "id": 3,
            "joke": "Why do Java developers wear glasses? Because they don't C#."
        },
        {
            "id": 4,
            "joke": "I told my computer I needed a break... and it froze."
        },
        {
            "id": 5,
            "joke": "What’s a developer’s favorite hangout place? The Foo Bar."
        }
    ]

    return res.json(jokes);

})


app.listen(process.env.PORT, () => {

    console.log(`Server is running at port ${process.env.PORT}`);

})