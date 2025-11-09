import Product from "../models/productModel.js";


export const createProductService = async (data) => {
  const CategoryExist = Category.findById(data.Category);

  if (!CategoryExist) {
    const error = new Error(`La categoria con id ${data.Category} no existe`);
    error.statusCode = 400;
    throw error;
  }
  const exist = await Product.findOne({ name: data.name });
  if (exist) {
    const error = new Error(
      `El repuesto ${data.name} ya existe, elegi un repuesto distinto`
    );
    error.statusCode = 409;
    throw error;
  }
  const newProduct = new Product(data);
  const savedProduct = await newProduct.save();
  return savedProduct;
};

export const getProductsService = async () => {
  const product = await Product.find();

  if (product.length === 0) {
    const error = new Error("No hay categorias");
    error.statusCode = 204;
    throw error;
  }
  return product;
};

export const updateProductService = async (productId, data) => {
  const product = await Product.findById({ _id: productId });
  if (!product) {
    const error = new Error(
      `No se puede encontrar el repuesto con ese ID ${productId}`
    );
    error.statusCode = 404;
    throw error;
  }
  const result = await Product.findByIdAndUpdate({ _id: productId }, data);
  return result;
};

export const deleteProductService = async (productId, data) => {
  const product = await Product.findById(productId);
  if (!product) {
    const error = new Error(
      `El repuesto con id: ${productId} que usted quiere eliminar no esta disponible`
    );
    error.statusCode = 404;
    throw error;
  }
  const productDeleted = await Product.findByIdAndDelete(productId);
  return productDeleted;
};
