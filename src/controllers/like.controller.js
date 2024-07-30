import mongoose, { isValidObjectId } from "mongoose";
import { Like } from "../models/like.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const toggleVideoLike = asyncHandler(async (req, res) => {
  //TODO: toggle like on video
  const { videoId } = req.params;
  if (!isValidObjectId(videoId)) {
    throw new ApiError(400, "Invalid video id");
  }

  const likedAlready = await Like.findOne({
    video: videoId,
    likedBy: req.user?._id,
  });

  if (likedAlready) {
    const dislike = await Like.findByIdAndDelete(likedAlready?._id);

    if (!dislike) {
      throw new ApiError(500, "Dislike failed");
    }

    return res
      .status(200)
      .json(new ApiResponse(200, { isLiked: false }, "disliked successfully"));
  }

  const like = await Like.create({
    video: videoId,
    likedBy: req.user?._id,
  });
  if (!like) {
    throw new ApiError(500, "Like failed");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, { isLiked: true }, "liked successfully"));
});

const toggleCommentLike = asyncHandler(async (req, res) => {
  //TODO: toggle like on comment
  const { commentId } = req.params;
  if (!isValidObjectId(commentId)) {
    throw new ApiError(400, "Invalid comment id");
  }

  const likedAlready = await Like.findOne({
    comment: commentId,
    likedBy: req.user?._id,
  });

  if (likedAlready) {
    const dislike = await Like.findByIdAndDelete(likedAlready?._id);

    if (!dislike) {
      throw new ApiError(500, "Dislike failed");
    }

    return res
      .status(200)
      .json(new ApiResponse(200, { isLiked: false }, "disliked successfully"));
  }

  const like = await Like.create({
    comment: commentId,
    likedBy: req.user?._id,
  });
  if (!like) {
    throw new ApiError(500, "Like failed");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, { isLiked: true }, "liked successfully"));
});

const toggleTweetLike = asyncHandler(async (req, res) => {
  //TODO: toggle like on comment
  const { tweetId } = req.params;
  if (!isValidObjectId(tweetId)) {
    throw new ApiError(400, "Invalid tweet id");
  }

  const likedAlready = await Like.findOne({
    tweet: tweetId,
    likedBy: req.user?._id,
  });

  if (likedAlready) {
    const dislike = await Like.findByIdAndDelete(likedAlready?._id);

    if (!dislike) {
      throw new ApiError(500, "Dislike failed");
    }

    return res
      .status(200)
      .json(new ApiResponse(200, { isLiked: false }, "disliked successfully"));
  }

  const like = await Like.create({
    tweet: tweetId,
    likedBy: req.user?._id,
  });
  if (!like) {
    throw new ApiError(500, "Like failed");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, { isLiked: true }, "liked successfully"));
});

const getLikedVideos = asyncHandler(async (req, res) => {
  //TODO: get all liked videos

  const likedVideos = await Like.aggregate([
    {
      $match: {
        likedBy: new mongoose.Types.ObjectId(req.user?._id),
      },
    },
    {
      $lookup: {
        from: "videos",
        localField: "video",
        foreignField: "_id",
        as: "likedVideo",
        pipeline: [
          {
            $lookup: {
              from: "users",
              localField: "owner",
              foreignField: "_id",
              as: "ownerDetails",
            },
          },
          {
            $unwind: "$ownerDetails",
          },
        ],
      },
    },
    {
      $unwind: "$likedVideo",
    },
    {
      $sort: {
        createdAt: -1,
      },
    },
    {
      $project: {
        _id: 0,
        likedVideo: {
          _id: 1,
          title: 1,
          description: 1,
          videoFile: 1,
          thumbnail: 1,
          duration: 1,
          views: 1,
          createdAt: 1,
          owner: 1,
          isPublished: 1,
          ownerDetails: {
            _id: 1,
            username: 1,
            fullName: 1,
            avatar: 1,
          },
        },
      },
    },
  ]);

  return res
    .status(200)
    .json(
      new ApiResponse(200, likedVideos, "Liked videos fetched successfully")
    );
});

export { toggleCommentLike, toggleTweetLike, toggleVideoLike, getLikedVideos };
