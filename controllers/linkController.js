const Link = require('../models/Link.js')

const linkController = {
    index: (req, res) => {
        res.render('index')
    },
    new: (req, res) => {
        res.send('Hi from the new view')
    },
    create: (req, res) => {
        res.send('hi from create post')
    },
    show: (req, res) => { 
        res.send('show single post')
    },
    edit: (req, res) => {
        res.send('edit form')
    },
    update: (req,res) => {
        res.send('update post')
    },
    delete: (req, res) => {
        res.send('deleted post')
    },

}

module.exports = linkController 