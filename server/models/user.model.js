import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: [true, "Email already exists"],
    },
    password: {
      type: String,
      required: [true, " Strong Password is required"],
    },
    verified: {
      type: Boolean,
      default: false,
    },
    verifactionToken: {
      type: String,
    },
    profilePic: {
      type: String,
      default: null,
    },
    coverPic: {
      type: String,
      default: null,
    },
    userDescription: {
      type: String,
      default: null,
    },
    location: {
      type: String,
      default: null,
    },
    skills: {
      type: [String],
      default: [],
    },
    userTpe: {
      type: String,
      enum: ["Job", "Employee"],
      default: "Job",
    },
    followers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    following: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    friends: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    posts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",
      },
    ],
    tagByOtherUser: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",
      },
    ],
    tagMyPostOtherUser: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const UserModel = mongoose.model("User", userSchema);
export default UserModel;
