const express = require('express')
const PORT = 8585
const mongoose = require("mongoose");
const cors = require("cors")
const bodyParser = require("body-parser");

require("dotenv").config();
const app = express()


app.use(cors())
app.use(bodyParser.json({ limit : "50mb"}))
app.use(bodyParser.urlencoded({limit: "50mb", extended:true}))

mongoose
.connect("mongodb+srv://ilvin88:ilvin88@cluster0.2mgcc5x.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("db join succes");
    app.listen(PORT, () => {
        console.log(`Example app listening on port ${PORT}`)
      })
})
.catch((err) =>{
    console.log(err);
})

const {Schema} = mongoose;

const productSchema = new Schema({
    title :{type:String, require},
    price : {type:Number, require},
    description : {type:String, require},
    image : {type:String, require}
},{
    timestamps: true
})

const Products =  mongoose.model("products", productSchema);


// get all products
app.get('/products', async(req, res) => {
    try {
        const products = await Products.find({})
        res.send(products)
    } catch (error) {
        res.send({message: error.message})
    }
  })



//   by id
  app.get('/products/:id', async(req, res) => {
    const {id} = req.params
    try {
        const products = await Products.findById(id)
    res.send(products)
    } catch (error) {
        res.send({message: error.message})
    }
  })



//   post
  app.post('/products', async(req, res) => {
    try {
        const products = new Products(req.body)
        await products.save()
        res.send(products)
    } catch (error) {
        res.send({message: error.message})
    }
  })






//   patch
  app.patch('/products/:id', async(req, res) => {
    const {id} = req.params
    try {
        const products = await Products.findByIdAndUpdate(id, req.body)
        res.send(products)
    } catch (error) {
        res.send({message: error.message})
    }
  })


//   delete
  app.delete('/products/:id', async(req, res) => {
    const {id} = req.params
    try {
        const deleteProduct = await Products.findByIdAndDelete(id)
        res.send(deleteProduct)

    } catch (error) {
        res.send({message : error.message})
    }
  })




