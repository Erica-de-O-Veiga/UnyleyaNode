
const { Op } = require('sequelize')
const Link = require('../models/link');
const { generateCode } = require('../utils');

const getAll = async function(req, res) {
   const date = req.query.date  

   const where = date ?
    {
        createdAt: {
            [Op.between]: [new Date(`${date} 00:00`), new Date(`${date} 23:59`)]
        }
    } :
    {}  
    
    const links = await Link.findAll({ where })

    return res.json(links);
  } 

const getById = async function(req, res) {
    const id = req.params.id
    let link = await Link.findByPk(id)

    if (!link){
        return res.status(404).json();
    }

    return res.json(link);
}

const getByCode = async function(req, res) {
const code = req.params.code
let link = await Link.findOne({where:{code}})
if (!link){
    return res.status(404).json();
}

return res.json(link);
}

const create = async function(req, res) {
    const url = req.body.url;
    const code = generateCode();  

    await Link.create ({        
        url,
        code    
    })
    return res.status(201).json();
}   

  module.exports= {getAll, getById, getByCode, create}