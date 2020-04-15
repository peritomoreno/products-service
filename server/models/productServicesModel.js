const db = require('../../database/index');

const productService = {
  getList: ({ query }) => {
    return db.any(
      `select * from products LIMIT ${query.results} OFFSET ${
        (query.page - 1) * query.results
      };`
    );
  },

  getProduct: ({ params }) => {
    return db.any(`select * from products where id = ${params.product_id};`);
  },

  getStyles: ({ params }) => {
    return db.any(`select * from styles, skus, photos
	        where styles."productId" = ${params.product_id} and 
			styles."id" = skus."styleId" and
			photos."styleId" = styles."id";
`);
  },

  getRelatedProducts: ({ params }) => {
    return db.any(
      `select * from related where current_product_id = ${params.product_id}`
    );
  },
};

module.exports = productService;
