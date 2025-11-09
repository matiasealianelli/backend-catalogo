import mongoose from "mongoose";
import bcrypt from "bcrypt";

const User = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "El campo Nombre de usuario es obligatorio"],
      minLength: 3,
      maxLength: 20,
      unique: true,
      lowercase: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: [true, "El campo Apellido de usuario es obligatorio"],
      minLength: 3,
      maxLength: 20,
      unique: true,
      lowercase: true,
      trim: true,
    },
    email: {
      type: String,
      required: [true, "El campo Email de usuario es obligatorio"],
      maxLength: 50,
      trim: true,
      lowercase: true,
      match: /^\S+@\S+\.\S+$/,
    },
    password: {
      type: String,
      required: [true, "La contraseña es invalida"],
    },
  },
  { timestamps: true }
);

User.pre("save", async function (next) {
  // bcrypt
  //   .genSalt(10)
  //   .then((salts) => {
  //     bcrypt
  //       .hash(this.password, salts)
  //       .then((hash) => {
  //         this.password = hash;
  //         next();
  //       })
  //       .catch((error) => next(error));
  //   })
  //   .catch((error) => next(error));
  
  
  
  
    try {
    if (!this.isModified("password")) return next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (err) {
    next(err);
  }
});

export default mongoose.model("user", User);
