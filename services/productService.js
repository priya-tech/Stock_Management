var baseDao = require('../daos/baseDao');

function createProduct(product, callback){
    baseDao.create(product, "products", function(err, result){
        if(err){
            callback(err, null);
            return;
        }
        callback(null, result);
        return;
    });
}

function getProductById(productId, callback){
    baseDao.getById(productId, "products", function(err, result){
        if(err){
            callback(err, null);
            return;
        }       
        callback(null, result);
        return;
    });
}

function getProducts(callback){
    baseDao.find("products", function(err, result){
        if(err){
            callback(err, null);
            return;
        }       
        callback(null, result);
        return;
    })
}

function updateProductById(productId, record, callback){
    baseDao.updateById(productId, record, "products", function(err, result){
        if(err){
            callback(err, null);
            return;
        }       
        callback(null, result);
        return;
    });
}

function removeProductById(productId, callback){
    baseDao.removeProductById(productId, "products", function(err, result){
        if(err){
            callback(err, null);
            return;
        }       
        callback(null, result);
        return;
    });
}

module.exports.createProduct = createProduct;
module.exports.getProductById = getProductById;
module.exports.getProducts = getProducts;
module.exports.updateProductById = updateProductById;
module.exports.removeProductById = removeProductById;
