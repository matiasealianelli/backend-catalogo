import Product from "../models/productModel.js";

export const createProductService = async (data) => {
  const exist = await Product.findOne({ name: data.name });
  if (exist) {
    const error = new Error(
      `Product ${data.name} already exist, choose another name`
    );
    error.statusCode = 409;
    throw error;
  }
  const newProduct = new Product(data);
  const savedProduct = await newProduct.save();
  return savedProduct;
};

export const getProductsService = async () => {
  const products = await Product.find();
  if (products.length === 0) {
    const error = new Error(
      "Aun no hay productos, agregue productos para poder ver el resultado"
    );
    throw error;
  }
  return products;
};

export const updateProductService = async (productId, data) => {
  const product = await Product.findById({ _id: productId });
  if (!product) {
    const error = new Error(
      `No se puede encontrar el producto con ese ID ${productId}`
    );
    error.statusCode = 400;
    throw error;
  }
  const result = await Product.findByIdAndUpdate({ _id: productId }, data);
  return result;
};

export const deleteProductService = async (productId, data) => {
  const product = await Product.findById({ _id: productId });
  if (!product) {
    const error = new Error(
      `El producto con id: ${productId} que usted quiere eliminar no esta disponible`
    );
    throw error;
  }
  const productDeleted = Product.findByIdAndDelete({ _id: productId }, data);
  return productDeleted;
};
