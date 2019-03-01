const Link = require('../models/Link.js')

const linkController = {
    index:(req, res) => {
        res.send('hi from index')
    },
    new: (req, res) => {
        res.send('Hi from the new view')
    }
}

module.exports = linkController 