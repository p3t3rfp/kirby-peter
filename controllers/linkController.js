const Link = require('../models/Link.js')

const linkController = {
    index: (req, res) => {
        Link.find().then(links => {
            res.render('index', { links })
        })
    },
    new: (req, res) => {
        res.render('new')
    },
    create: (req, res) => {
        Link.create(req.body)
            .then(link => {
                res.redirect('/')
            })
    },
    show: (req, res) => {
        let { linkId } = req.params
        Link.findById(req.params.linkId)
            .then(link => {
                res.render('show', { link, linkId })
            })
    },
    edit: (req, res) => {
        let { linkId } = req.params
        Link.findById(req.params.linkId).then(link => {
            res.render('edit',{link, linkId})

        })
    },
    update: (req, res) => {
        Link.findByIdAndUpdate(req.params.linkId, req.body, {new:true})
        .then(()=> {
            res.redirect(`/${req.params.linkId}`)
        })
    },
    delete: (req, res) => {
        Link.findByIdAndDelete(req.params.linkId).then(() => {
            res.redirect('/')
        })
    },

}

module.exports = linkController 
