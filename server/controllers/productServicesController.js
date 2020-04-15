const ProductService = require('../models/productServicesModel.js');

module.exports.getList = (req, res) => {
  ProductService.getList(req)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(`Error: `, err);
      res.sendStatus(500);
    });
};

module.exports.getProduct = (req, res) => {
  ProductService.getProduct(req)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(`Error: `, err);
      res.sendStatus(500);
    });
};

module.exports.getStyles = (req, res) => {
  ProductService.getStyles(req)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(`Error: `, err);
      res.sendStatus(500);
    });
};

module.exports.getRelatedProducts = (req, res) => {
  ProductService.getRelatedProducts(req)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(`Error: `, err);
      res.sendStatus(500);
    });
};
