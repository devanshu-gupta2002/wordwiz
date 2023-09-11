import User from "../models/user.js";

export const updateScore = async(req, res) => {
  try {
    const userId = req.params.userId
    const score = req.body.score
    const user = await User.findById(userId)

    if(!user) {
      return res.status(404).json({message: "user not found"})
    }
    user.score=score
    const updatedUser = await user.save()
    res.status(201).json(updatedUser)
  } catch (err) {
    res.status(404).json({error: err.message})
  }
}

export const getUser = async(req, res) => {
  try{
    const users = await User.find()
    res.status(200).json(users)
  } catch (err) {
    res.status(404).json({message: err.message})
  }
}

export const getScore = async(req, res) => {
  try {
    const userId = req.params.userId
    const user = await User.findById(userId)
    const score = user.score

    if(!user) {
      return res.status(404).json({message: "user not found"})
    }
    res.status(201).json({score: score})
  } catch (err) {
    res.status(404).json({error: err.message})
  }
}