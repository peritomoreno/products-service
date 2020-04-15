const productServicesRouter = require('express').Router();
const productServicesController = require('../controllers/productServicesController');

productServicesRouter
  .route('/products/list')
  .get(productServicesController.getList);
productServicesRouter
  .route('/products/:product_id')
  .get(productServicesController.getProduct);
productServicesRouter
  .route('/products/:product_id/styles')
  .get(productServicesController.getStyles);
productServicesRouter
  .route('/products/:product_id/related')
  .get(productServicesController.getRelatedProducts);

module.exports = productServicesRouter;
