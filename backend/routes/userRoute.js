import express from "express";
import { Login } from "../controllers/userController.js";
import { Register } from "../controllers/userController.js";
import { bookmark } from "../controllers/userController.js";
import { follow } from "../controllers/userController.js";
import { getMyProfile } from "../controllers/userController.js";
import { getOtherUsers } from "../controllers/userController.js";
import { logout } from "../controllers/userController.js";
import { unfollow } from "../controllers/userController.js";

import authenticate from "../config/auth.js";

const router = express.Router();

router.route("/register").post(Register);
router.route("/login").post(Login);
router.route("/logout").get(logout);
router.route("/bookmark/:id").put(authenticate, bookmark);
router.route("/profile/:id").get(authenticate, getMyProfile);
router.route("/otheruser/:id").get(authenticate, getOtherUsers);
router.route("/follow/:id").post(authenticate, follow);
router.route("/unfollow/:id").post(authenticate, unfollow);

export default router;
