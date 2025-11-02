import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "Name product field is required"],
      minLength: 3,
      maxLength: 50,
      unique: true,
      lowercase: true,
      trim: true,
    },
    description: {
      type: String,
      require: [true, "Description product field is required"],
      maxLength: 400,
      lowercase: true,
      trim: true,
    },
    stock: {
      type: Number,
      require: [true, "Stock product field is required"],
      lowercase: true,
      trim: true,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "category",
      required: [true, "Category is required"],
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("product", productSchema);