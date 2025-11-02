import mongoose from "mongoose";
import bcrypt from "bcrypt";

const User = new mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "Name field is required"],
      minLength: 3,
      maxLength: 20,
      unique: true,
      lowercase: true,
      trim: true,
    },
    lastName: {
      type: String,
      require: [true, "LastName field is required"],
      minLength: 3,
      maxLength: 20,
      unique: true,
      lowercase: true,
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email field is required"],
      maxLength: 50,
      trim: true,
      lowercase: true,
      match: /^\S+@\S+\.\S+$/,
    },
    password: {
      type: String,
      required: [true, "Password invalided"],
    },
  },
  { timeStamps: true }
);

User.pre("save", function (next) {
  bcrypt
    .genSalt(10)
    .then((salts) => {
      bcrypt
        .hash(this.password, salts)
        .then((hash) => {
          this.password = hash;
          next();
        })
        .catch((error) => next(error));
    })
    .catch((error) => next(error));
});

export default mongoose.model("user", User);
