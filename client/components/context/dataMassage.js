/* eslint-disable no-underscore-dangle */
function getLowStock(skus) {
  const lowStockSkus = {};
  skus.forEach((sku) => { lowStockSkus[sku._id] = sku.stock; });
  return lowStockSkus;
}

module.exports = {
  getLowStock,
};
