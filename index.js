express = require('express')
cors = require('cors')

require('./db.js')

app = express()

app.use( cors() )

app.get("/", (req, res) => {

    res.end("Hello Express");
})

app.get("/api/coin", (req,res) => {
    random = Math.random()
    flag = random >= 0.5  ? 1 : 0

    obj = { 'random': random,
            'flag': flag }
            
    res.json( obj )
    
})

app.get("/api/dice", (req,res) => {
    face = Math.ceil( Math.random() *6 )

    obj = { 'face': face }
    res.json(obj)
})


PORT = process.env.PORT || 8000
app.listen(PORT, ()=>console.log(`Server Listen on port: ${PORT}`))
