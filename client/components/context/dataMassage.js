/* eslint-disable no-underscore-dangle */
function getOutOfStock(skus) {
  const noStock = skus.filter((sku) => sku.stock === 0);
  const hasStock = skus.filter((sku) => sku.stock > 0);
  return [noStock, hasStock];
}

module.exports = {
  getOutOfStock,
};
