const Product = require('../models/product')

exports.newProducts = (req, res, next) => {
    res.status(200).json({
        success: true,
        message: 'This route will show all products in the database.'
    })
}
exports.getProducts = (req, res, next) => {
    res.status(200).json({
        success: true,
        message: 'This route will show all products in the database.'
    })
}