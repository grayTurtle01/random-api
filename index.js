express = require('express')
cors = require('cors')

require('./db')

app = express()

app.use( cors() )

app.get("/", (req, res) => {

    res.end("Hello Random API");
})

app.get("/api/coin", async(req,res) => {
    random = Math.random()
    flag = random >= 0.5  ? 1 : 0

    //Update Counter
    head = 0
    tail = 0

    if( flag == 1 ){
        head = 1
    }
    else{
        tail = 1
    }

    q = `UPDATE coin
     SET heads= heads + ?,
         tails= tails + ?
     WHERE id=1
     `
    await db.run(q, [head, tail], (err) => {
        if(err)
            console.log(err)
        else
            console.log(" ==> row updated")
    })


    // Send Result
    q = 'SELECT * FROM coin WHERE id = 1'
    db.all(q, (err, rows)=> {
        if(err){
            console.log("error")
            res.json({status: 'error'})
        }
        else{
            obj = { 'random': random,
                    'flag': flag,
                    'counter': rows[0] }
            
            
            res.json( obj )
        }
    })
    
})



app.get("/api/dice", (req,res) => {
    face = Math.ceil( Math.random() *6 )

    obj = { 'face': face }
    res.json(obj)
})


PORT = process.env.PORT || 8000
app.listen(PORT, ()=>console.log(`Server Listen on port: ${PORT}`))
