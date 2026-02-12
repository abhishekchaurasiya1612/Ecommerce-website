import * as authService from "../services/authService.js";

// export const register = async (req, res, next) => {
//   try {
//     const user = await authService.registerUser(req.body);
//     res.json(user);
//   } catch (err) {
//     next(err);
//   }
// };

export const register = async (req, res, next) => {
  console.log("Register API Hit");
  try {
    const user = await authService.registerUser(req.body);
    res.json(user);
  } catch (err) {
    console.log("Error:", err.message);
    next(err);
  }
};


export const login = async (req, res, next) => {
  try {
    const tokens = await authService.loginUser(
      req.body.email,
      req.body.password
    );
    res.json(tokens);
  } catch (err) {
    next(err);
  }
};
