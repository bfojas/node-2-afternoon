module.exports ={

create: (req,res) =>{
    req.app.get('db').create_product({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        image_url: req.body.image_url
    })
    .then(()=>res.sendStatus(200))
    .catch(error => {res.status(500).send({errorMessage: "shits fucked up"})
    console.log('error in create',error)})
},


getOne: (req,res) =>{
    req.app.get('db').read_product({product_id: req.param.id})
    .then(product => res.status(200).send(product))
    .catch(error => {res.status(500).send({errorMessage: "shits fucked up"})
    console.log('error in getOne',error)})
},

getAll: (req,res) =>{
    req.app.get('db').read_products()
    .then(product => res.status(200).send(product))
    .catch(error => {res.status(500).send({errorMessage: "shits fucked up"})
    console.log('error in getAll',error)})
},

update: (req,res) =>{
    req.app.get('db').update_product({product_id: req.params.id, description: req.query.desc})
    .then(()=>res.sendStatus(200))
    .catch(error => {res.status(500).send({errorMessage: "shits fucked up on update"})
    console.log('error in update',error)
})

},

delete: (req,res) =>{
    req.app.get('db').delete_product({product_id: req.params.id})
    .then(()=>res.sendStatus(200))
    .catch(error => {res.status(500).send({errorMessage: "shits fucked up"})
    console.log('error in delete',error)    
})

}


}