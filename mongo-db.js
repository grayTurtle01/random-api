dotenv = require('dotenv')
dotenv.config()

const {MongoClient} = require('mongodb')

uri = process.env.MONGO_URI

db = {}
MongoClient.connect(uri)
    .then( client => {
        console.log(" ==> Mongo connected")
        db = client.db('miDB')
    })
    .then( () => {
        // let obj = { 
        //             name: 'coin', 
        //             heads : 0, 
        //             tails: 0
        //          }

        // db.collection('counters').insertOne( obj )
        // .then( x => {
        //     console.log(" Object Added ")
        // })
        // .catch(err => console.log(er))


    } )

