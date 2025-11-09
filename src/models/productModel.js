import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "El campo Nombre del producto es obligatorio"],
      minLength: 3,
      maxLength: 50,
      unique: true,
      lowercase: true,
      trim: true,
    },
    description: {
      type: String,
      required: [true, "El campo Descripcion es obligatorio"],
      maxLength: 500,
      lowercase: true,
      trim: true,
    },
    stock: {
      type: Number,
      min: 0
    },
    categories: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "category",
      required: [true, "La categoria es requerida"],
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("product", productSchema);