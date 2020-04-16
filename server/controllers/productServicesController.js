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
      res.send(data[0]['json_build_object']);
    })
    .catch((err) => {
      console.log(`Error: `, err);
      res.sendStatus(500);
    });
};

module.exports.getStyles = (req, res) => {
  ProductService.getStyles(req)
    .then((data) => {
      const formattedData = {
        product_id: data[0]['json_build_object']['product_id'],
        results: [],
      };

      for (let i = 0; i < data.length; i++) {
        const currRecord = data[i]['json_build_object'];
        const photos =
          currRecord['photos'].length === 0
            ? [{ url: null, thumbnail_url: null }]
            : currRecord['photos'];

        const cleanCopy = Object.assign(
          {},
          {
            style_id: currRecord['style_id'],
            name: currRecord['name'],
            original_price: currRecord['original_price'],
            sale_price: currRecord['sale_price'],
            'default?': currRecord['default?'],
            photos,
            skus: currRecord['skus'],
          }
        );

        formattedData['results'].push(cleanCopy);
      }

      res.send(formattedData);
    })
    .catch((err) => {
      console.log(`Error: `, err);
      res.sendStatus(500);
    });
};

module.exports.getRelatedProducts = (req, res) => {
  ProductService.getRelatedProducts(req)
    .then((data) => {
      res.send(data[0]['array']);
    })
    .catch((err) => {
      console.log(`Error: `, err);
      res.sendStatus(500);
    });
};
