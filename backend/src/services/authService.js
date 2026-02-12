import bcrypt from "bcryptjs";
import { User } from "../models/User.js";
import { generateAccessToken, generateRefreshToken } from "../utils/generateToken.js";

export const registerUser = async (data) => {
  const hash = await bcrypt.hash(data.password, 10);
  return await User.create({ ...data, password: hash });
};

export const loginUser = async (email, password) => {
  const user = await User.findOne({ where: { email } });
  if (!user) throw new Error("User not found");

  const match = await bcrypt.compare(password, user.password);
  if (!match) throw new Error("Invalid password");

  const accessToken = generateAccessToken({ id: user.id, role: user.role });
  const refreshToken = generateRefreshToken({ id: user.id });

  user.refreshToken = refreshToken;
  await user.save();

  return { accessToken, refreshToken };
};
