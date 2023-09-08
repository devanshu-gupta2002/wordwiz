import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true,
  },
  score: {
    type: Number,
    default: 0
  }
})

const User = mongoose.model('user', userSchema)

export default User