const db = require('../../database/index');

const productService = {
  getList: ({ query }) => {
    let { page, results } = query;
    page = page === undefined ? 1 : page;
    results = results === undefined ? 5 : results;

    return db.any(
      `select * from products LIMIT ${results} OFFSET ${(page - 1) * results};`
    );
  },

  getProduct: ({ params }) => {
    return db.any(
      `SELECT json_build_object(
      'id', products."id",
      'name', products."name",
      'slogan', products."slogan",
      'description', products."description",
      'category', products."category",
      'default_price', products."default_price",
      'features', ARRAY(
        SELECT json_build_object('feature', features."feature", 'value', features."value") 
        FROM features 
        WHERE features."product_id" = products."id"
        )
      )
      FROM products
      WHERE products."id" = ${params.product_id}
      GROUP BY
        products."id", 
        products."name", 
        products."slogan", 
        products."description", 
        products."category", 
        products."default_price";`
    );
  },

  getStyles: ({ params }) => {
    return db.any(
      `SELECT json_build_object(
	      'style_id', s."id", 
        'product_id', s."productId", 
        'name', s."name", 
        'sale_price', s."sale_price", 
        'original_price', s."original_price", 
        'default?', s."default_style", 
        'skus', (SELECT json_object_agg("size", "quantity") FROM skus WHERE skus."styleId" = s."id" GROUP BY skus."styleId"),
        'photos', ARRAY(SELECT json_build_object('url', photos."url", 'thumbnail_url', photos."thumbnail_url") FROM photos WHERE photos."styleId" = s."id")
      ) 
      FROM styles AS s 
      WHERE s."productId" = ${params.product_id}
      GROUP BY s."id"

      `
    );
  },

  getRelatedProducts: ({ params }) => {
    return db.any(
      `SELECT ARRAY(SELECT related."related_product_id"
      FROM related 
      WHERE related."current_product_id" = ${params.product_id})`
    );
  },
};

module.exports = productService;
