express = require('express')
cors = require('cors')

require('./mongo-db')

app = express()

app.use( cors() )

app.get("/", (req, res) => {

    res.end("Hello Random API");
})

app.get("/api/coin", async(req,res) => {
    random = Math.random()
    flag = random >= 0.5  ? 1 : 0

    obj = {
        'random': random,
        'flag': flag
    }

    //Update Counter
    head = 0
    tail = 0

    if( flag == 1 ){
        head = 1
    }
    else{
        tail = 1
    }

    query = {name: 'coin'}
    new_values = {$inc: { 'heads': head, 'tails': tail } }
    options = {'upsert': true}

    db.collection('counters').findOneAndUpdate(query, new_values, options)
    .then( x => {
        counter = x.value
        obj.heads = counter.heads    
        obj.tails = counter.tails    

        res.json( obj )
    })
            
    
})

app.get("/api/dice", (req,res) => {
    face = Math.ceil( Math.random() *6 )

    obj = { 'face': face }
    res.json(obj)
})


PORT = process.env.PORT || 8000
app.listen(PORT, ()=>console.log(` ==> Server Listen on port: ${PORT}`))
