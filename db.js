sqlite = require('sqlite3')

db = new sqlite.Database('miDB', (err) => {
    if( err )
        console.log(err)
    else
        console.log(" ==> Connected to sqlite")
})

/*** Create Coin Table ***/
//~ query = `CREATE TABLE coin(id INTEGER PRIMARY KEY AUTOINCREMENT,
                           //~ heads int,
                           //~ tails int)`

//~ db.run(query, (err) => {
    //~ if(err){
        //~ console.log(err)
        //~ console.log(" ==> That table already exists")
    //~ }
    //~ else
        //~ console.log(" ==> Table created")
//~ })

/*** Insert Initial State ***/
//~ q = `INSERT INTO coin(heads, tails)
                 //~ VALUES(0,0)`

//~ db.run(q, (err) =>{
    //~ if(err)
        //~ console.log(err)
    //~ else
        //~ console.log("Row added")
//~ })

// Change the first row
//~ q = `UPDATE coin
     //~ SET heads=20,
         //~ tails=20 
     //~ WHERE id=1
     //~ `
//~ db.run(q, (err) => {
    //~ if(err)
        //~ console.log(err)
    //~ else
        //~ console.log(" ==> row updated")
//~ })

function updateState( flag ){
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
    db.run(q, [head, tail], (err) => {
        if(err)
            console.log(err)
        else
            console.log(" ==> row updated")
    })
}

// Problem here with asynchronimus
function getState(){
    q = 'SELECT * FROM coin WHERE id = 1'
    db.all(q, (err, rows)=> {
        if(err){
            console.log("error")
            return console.log(err)
        }
        else{
            console.log("rows")
            return rows
        }
    })
}


//~ setTimeout( getState(), 2000)
