import {
  createCategoryService,
  deleteCategoryService,
  updateCategoryService,
  getCategoryService,
} from "../services/categoryService.js";

//Creamos una categoria

export const createCategory = async (req, res) => {
  try {
    const data = req.body;
    const categoryCreated = await createCategoryService(data);
    return res.status(201).json({
      message: "Categoria creada exitosamente",
      data: categoryCreated,
    });
  } catch (error) {
    if (error.statusCode === 409) {
      return res.status(error.statusCode).json({ error: error.message });
    }
    return res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

//Eliminamos la categoria buscada por el id

export const deleteCategory = async (req, res) => {
  try {
    const categoryId = req.params.id;
    const result = await deleteCategoryService(categoryId);
    res.status(200).json({ result });
  } catch (error) {
    if (error.statusCode === 400) {
      return res.status(error.statusCode).json({ message: error.message });
    }
    return res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

//Actualizamos la categoria mediante la busqueda por id

export const updateCategory = async (req, res) => {
  try {
    const categoryId = req.params.id;
    const data = req.body;
    const result = await updateCategoryService(categoryId, data);
    return res.status(201).json({ result });
  } catch (error) {
    if (error.statusCode === 400) {
      return res.status(error.statusCode).json({ message: error.message });
    }
    return res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

//Obtenemos todos las categorias

export const getCategories = async (req, res) => {
  try {
    const categoryId = req.params.id;
    const category = await getCategoryService({categoryId});
    res.status(200).json(category);
  } catch (error) {
    if (error.statusCode === 204) {
      return res.status(error.statusCode).json([]);
    }

    return res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};
