//import modules
const express = require("express")
let mongodb= require("mongodb")
//import url
let url = require("../url")
//create mongo client
let mcl = mongodb.MongoClient
//create router instance
let router = express.Router()
//create rest api
router.get("/",(req,res)=>{
    mcl.connect(url,(err,conn)=>{
        if(err){
            console.log("Error in connection : ",err)
        }
        else{
            let db = conn.db("nodedb")
                db.collection("products").find().toArray((err,array)=>{
                    if (err)
                        console.log('Error:- ', err)
                    else {
                        console.log('Data Sent')
                        res.json(array)
                        conn.close()
                    }

                })
            
        }
    })
})
module.exports = router