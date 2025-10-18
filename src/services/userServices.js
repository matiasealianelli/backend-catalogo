import User from "../models/userModel.js";


//Crea un nuevo usuario
export const createUserService = async (userData) => {
  const userExists = await User.findOne({ email: userData.email });

  if (userExists) {
    throw new Error("User with this email already exists");
  }

  const newUser = new User(userData);

  await newUser.save();

  return { message: "User created", user: newUser };
};

//Trae todos los usuarios disponibles

export const getUserService = async () => {
  const users = await User.find();

  if (users.length === 0) {
    const error = new Error("There are no users");
    error.statusCode = 204;
    throw error;
  }
  return users;
};

//Trae el usuario con el mismo ID

export const getUserByIdService = async (userId) => {
  const user = await User.findById({ _id: userId });

  // Valida si no existe el usuario

  if (!user) {
    const error = new Error(`There is no user with ${userId} id`);
    error.statusCode = 204;
    throw error;
  }
  return user;
};

//Actualiza la informacion del usuario

export const updateUserService = async (userId, updateData) => {
  const userExists = await User.findOne({ _id: userId });

  if (!userExists) {
    const error = new Error("User doesn't exist");
    error.statusCode = 404;
    throw error;
  }
  const updatedUser = await User.findByIdAndUpdate(
    { _id: userId },
    updateData,
    { new: true }
  );
  return updatedUser;
};

//Elimina al usuario

export const deleteUserService = async (userId) => {

  //Valida si existe el usuario que se quiere eliminar
  
  const userExists = await User.findOne({ _id: userId });

  if (!userExists) {
    const error = new Error("User doesn't exist");
    error.statusCode = 404;
    throw error;
  }

    await User.findByIdAndDelete({ _id: userId})

    return { message: "User deleted successfully" }
};