import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
      },
      phone: {
        type: Number,
        required: true,
        unique: true,
      },
      photo: {
        public_id: {
          type: String,
          required: true,
        },
        url: {
          type: String,
          required: true,
        },
      },
      education: {
        type: String,
        required: true,
      },
      role: {
        type: String,
        required: true,
        enum: ["user", "admin"],
      },
      password: {
        type: String,
        required: true,
        select: false,
        minlength: 8,
      },
      token: {
        type: String,
      },
      createdAt: {
        type: Date,
        default: Date.now,
      }
})

const User = mongoose.model("User", userSchema);
export default User;