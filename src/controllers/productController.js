import {
  createProductService,
  getProductsService,
  updateProductService,
  deleteProductService,
} from "../services/productService.js";

export const createProduct = async (req, res) => {
  try {
    const data = req.body;
    const productCreated = await createProductService(data);
    return res
      .status(201)
      .json({ message: "Repuesto creado exitosamente", data: productCreated });
  } catch (error) {
    if (error.statusCode === 409) {
      return res.status(error.statusCode).json({ error: error.message });
    }
    return res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

//Obtenemos todos los productos

export const getProducts = async (req, res) => {
  try {
    const data = req.body;
    const products = await getProductsService(data);
    res.status(200).json(products);
  } catch (error) {
    if (error.statusCode === 204) {
      return res.status(error.statusCode).json({ error: error.message });
    }
    return res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const updatedProduct = await updateProductService(productId, req.body);
    return res.status(201).json(updatedProduct);
  } catch (error) {
    if (error.statusCode === 404) {
      return res.status(error.statusCode).json({ message: error.message });
    }
    return res
      .status(500)
      .json({ message: `Internal server error`, error: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const result = await deleteProductService(productId);
    return res.status(200).json(result);
  } catch (error) {
    if (error.statusCode === 404) {
      return res.status(error.statusCode).json({
        message: error.message,
      });
    }
    return res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};
