const express = require('express');
const router = express.Router();
var productService = require('../services/productService');

router.get('/', (req, res, next) => {
  productService.getProducts(function(err, result){
    if(err){
        res.status(500).send({err: err.name, message: err.message});
    }
    else{
        res.send(result);
    }
  });
});

router.post('/', (req, res, next) => {
    var product = req.body;
    productService.createProduct(product, function(err, result){
        if(err){
            res.status(500).send({err: err.name, message: err.message});
        }
        else{
            res.send(result);
        }
    });
});

router.get('/:productId', (req, res, next) => {
    var productId = req.params.productId;
    
    productService.getProductById(productId, function(err, result){
        if(err){
            res.status(500).send(err);
        }
        else{
            res.send(result);
        }
    });
});

router.patch('/:productId', (req, res, next) => {
    var productId = req.params.productId;
    var record = req.body;
    productService.updateProductById(productId, record, function(err, result){
        if(err){
            res.status(500).send(err);
        }
        else{
            res.send(result);
        }
    });
});

router.delete('/:productId', (req, res, next) => {
    var productId = req.params.productId;
    productService.removeProductById(productId, function(err, result){
        if(err){
            res.status(500).send(err);
        }
        else{
            res.send(result);
        }
    });
});

module.exports = router;