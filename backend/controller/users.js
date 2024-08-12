import User from "../model/User.js";

export const getUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findById({ _id: userId });
    if (!user) {
      return res.status(400).json({ msg: "User does not exist" });
    }
    return res.status(200).json({ msg: "User found successfully", user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};
