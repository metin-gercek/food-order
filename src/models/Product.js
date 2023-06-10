import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      maxlength: 64,
    },
    desc: {
      type: String,
      required: true,
     
    },
    prices: {
        type: [Number],
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: true,
    },
    extraOptions: {
        type: [
            {
                text: { type: String},
                price: { type: Number},
            }
        ],
    }
  },
  { timestamps: true }
);

export default mongoose.models.Product ||
  mongoose.model("Product", ProductSchema);
