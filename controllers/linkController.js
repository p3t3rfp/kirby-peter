const Link = require('../models/Link.js')

const linkController = {
    index: (req, res) => {
        Link.find().then(links => {
            res.render('index', { links })
        })
    },
    new: (req, res) => {
        res.send('Hi from the new view')
    },
    create: (req, res) => {
        res.send('hi from create post')
    },
    show: (req, res) => {
        let { linkId } = req.params
        Link.findById(req.params.linkId)
            .then(link => {
                res.render('show', { link, linkId })
            })
    },
    edit: (req, res) => {
        res.send('edit form')
    },
    update: (req, res) => {
        res.send('update post')
    },
    delete: (req, res) => {
        res.send('deleted post')
    },

}

module.exports = linkController 

// show: (req, res) => {
//     let { shopId } = req.params
//     Shop.findById(req.params.shopId)
//         .then(shop => {
//             res.render('show', { shop, shopId })
//         })