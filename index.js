express = require('express')
cors = require('cors')

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


PORT = process.env.PORT || 8000
app.listen(PORT, ()=>console.log(`Server Listen on port: ${PORT}`))
