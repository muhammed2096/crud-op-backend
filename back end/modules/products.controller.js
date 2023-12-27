import query from "../database/connection.js"

export const homePage = (req, res)=>{
    res.json("Welcome back Back end Dev.. :D")
}
export const getAllProducts =  (req, res)=>{
    query.execute(`select * from products`, (err, data)=>{
        if(err){
            res.json({message:"Error", err})
        }else{
            res.json({message:"Success", data})
        }
    })
}
export const addProduct =  (req, res)=>{
    let {name, price, desc} = req.body;
    query.execute(`insert into products ( name, price, description) values ("${name}", "${price}", "${desc}")`, (err, data)=>{
        if(err){
            res.json({message:"Error", err})
        }else{      
            res.json({message:"Success", data})
        }
    })
}
export const deleteProduct =  (req, res)=>{
    let {id} = req.body
    query.execute(`delete from products where id = ${id}`, (err, data)=>{
       if(err){
            res.json({message:"َError", err}) 
       }else{
        if(data.affectedRows == 0){
            res.json({message:"Id not found"})
        }else{
            res.json({message:"Success", data})
        }
       }
    })
}
export const updateProduct = (req, res)=>{
    let {id, name, price, desc} = req.body;
    query.execute(`update products set name = "${name}", price = "${price}", description = "${desc}" where id = ${id}`, (err, data)=>{
        if(err){
            res.json({message:"َError", err})
        }else{
            if(data.affectedRows > 0){
                res.json({message:"Success", data})
            }else{
                res.json({message:"Id not found"})
            }
        }
    })
}
export const getById = (req, res)=>{
    let {id} = req.params;
    query.execute(`select * from products where id = ${id}`, (err, data)=>{
        if(err){
            res.json({message:"Error", err})
        }else{
            res.json({message:"Success", data})
        }
    })
}