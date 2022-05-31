const {MongoClient} = require('mongodb')

uri = "mongodb://localhost/miDB"

db = {}
MongoClient.connect(uri)
    .then( client => {
        console.log(" ==> Mongo connected")
        db = client.db('miDB')
    })