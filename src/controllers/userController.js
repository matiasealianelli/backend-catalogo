import {
  createUserService,
  getUserService,
  getUserByIdService,
  updateUserService,
  deleteUserService,
} from "../services/userServices.js";

export const createUser = async (req, res) => {
  try {
    const response = await createUserService(req.body);
    res.status(201).json(response);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

export const getUsers = async (req, res) => {
  try {
    const userId = req.params.id;
    const users = await getUserService(userId); // getUserService espera un id
    res.status(200).json(users);
  } catch (error) {
    if (error.statusCode === 204) return res.status(204).json([]);
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};


// Get By Id
export const getUserById = async (req, res) => {
    try {
        if(!req.params.id){
            res.status(400).json({message: "You must provide an user id"})
        }

        const userId = req.params.id

        const user = await getUserByIdService(userId)
        res.status(200).json(user)
        
    } catch (error) {
        if(error.statusCode === 204){
            return res.status(error.statusCode).json([])
        }
        return res.status(500).json({message: "Internal server error", error: error.message})
    }
}

export const updateUser = async (req, res) => {
    try {
        const userId = req.params.id
        const updatedUser = await updateUserService(userId, req.body)
        return res.status(201).json(updatedUser)
    } catch (error) {
        if(error.statusCode === 404){
            return res.status(error.statusCode).json({message: error.message})
        }
        return res.status(500).json({message: "Internal server error", error: error.message})
    }
}

export const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const result = await deleteUserService(userId);
    return res.status(200).json(result);
  } catch (error) {
    if (error.statusCode === 404)
      return res.status(404).json({ message: error.message });
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};
