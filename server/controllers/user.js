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