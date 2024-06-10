import express from "express";
import {
  createTweet,
  deleteTweet,
  getAllTweets,
  getFollowingTweets,
  likeOrDislike,
} from "../controllers/tweetController.js";
import authenticate from "../config/auth.js";

const router = express.Router();

router.route("/like/:id").put(authenticate, likeOrDislike);
router.route("/create").post(authenticate, createTweet);

router.route("/alltweets/:id").get(authenticate, getAllTweets);
router.route("/delete/:id").delete(authenticate, deleteTweet);

router.route("/create").post(authenticate, createTweet);
router.route("/followingtweets/:id").get(authenticate, getFollowingTweets);
export default router;
