import Category from "../models/categoryModel.js";

//Creamos una categoria

export const createCategoryService = async (data) => {
  const exist = await Category.findOne({ name: data.name });
  if (exist) {
    const error = new Error(
      `Category ${data.name} already exist, choose another name`
    );
    error.statusCode = 409;
    throw error;
  }
  const newCategory = new Category(data);
  const savedCategory = await newCategory.save();
  return savedCategory;
};

//Eliminamos la categoria buscada por el id

export const deleteCategoryService = async (categoryId) => {
  const exist = await Category.findById({ _id: categoryId });
  if (!exist) {
    const error = new Error(`Category with ${categoryId} doesn't exist`);
    error.statusCode = 400;
    throw error;
  }
  const result = await Category.deleteOne({ _id: categoryId });
  return result;
};

//Actualizamos la categoria mediante la busqueda por id

export const updateCategoryService = async (categoryId, data) => {
  const exist = await Category.findById({ _id: categoryId });
  if (!exist) {
    const error = new Error(`Category with ${categoryId} doesn't exist`);
    error.statusCode = 400;
    throw error;
  }
  const result = await Category.findByIdAndUpdate({ _id: categoryId }, data, {
    new: true,
  });
  return result;
};

//Obtenemos todos las categorias

export const getCategoriesService = async () => {
  const categories = await Category.find();

  if (categories.length === 0) {
    const error = new Error("There are no categories");
    error.statusCode = 204;
    throw error;
  }
  return categories;
};