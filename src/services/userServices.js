import User from "../models/userModel.js";
import bcrypt from "bcrypt";

//Crea un nuevo usuario
export const createUserService = async (userData) => {
  const userExists = await User.findOne({ email: userData.email });

  if (userExists) {
    throw new Error(
      `Ya existe un usuario con el email ${userData.email}, crealo con un email distinto`
    );
  }

  const newUser = new User(userData);

  await newUser.save();

  return { message: "Usuario creado", user: newUser };
};

//Trae todos los usuarios disponibles

export const getUserService = async () => {
  const users = await User.find();

  if (users.length === 0) {
    const error = new Error("No hay usuarios disponibles");
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
    const error = new Error(`No existe ningun usuario con el id ${userId}`);
    error.statusCode = 204;
    throw error;
  }
  return user;
};

//Actualiza la informacion del usuario

export const updateUserService = async (userId, updateData) => {
  const userExists = await User.findOne({ _id: userId });

  if (!userExists) {
    const error = new Error(`No existe ningun usuario con el id ${userId}`);
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
    const error = new Error(`No existe ningun usuario con el id ${userId}`);
    error.statusCode = 404;
    throw error;
  }

  const userDeleted = await User.findByIdAndDelete({ _id: userId });

  return { message: "Usuario eliminado exitosamente", message: userDeleted };
};

//Login de usuario

export const loginUserService = async (email, password) => {
  // Buscar usuario por email
  const user = await User.findOne({ email: email.toLowerCase() });

  if (!user) {
    const error = new Error("Usuario no encontrado");
    error.statusCode = 404;
    throw error;
  }

  // Comparar contraseña

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    const error = new Error("Credenciales inválidas");
    error.statusCode = 401;
    throw error;
  }

  return {
    message: "Login exitoso",
    user: { _id: user.id, name: user.name, email: user.email },
  };
};
