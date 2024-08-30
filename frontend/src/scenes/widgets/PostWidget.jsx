import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import WidgetWrapper from "../../components/WidgetWrapper";
import FlexBetween from "../../components/FlexBetween";
import UserImage from "../../components/UserImage";
import { setPost } from "../../state";
import { useTheme } from "@mui/material";
import {} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import Friend from "../../components/Friend";
import { patchLike } from "../../helper/api-communicator";

//this is how likes are stores in my db
// likes={
//   "userId1":true,
//   "userId1":true,
// }

const PostWidget = () => {
  ({
    postId,
    postUserId,
    name,
    description,
    location,
    userPicturePath,
    picturePath,
    likes,
    comments,
  }) => {
    const [isComments, setIsComments] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const token = useSelector((state) => state.token);
    const loggedInUserId = useSelector((state) => state.user._id);
    const isLiked = Boolean(likes[loggedInUserId]);
    const likesCount = Object.keys(likes).length;

    const { palette } = useTheme();

    const main = palette.neutral.main;
    const primary = palette.primary.main;

    const likeUnlikePost = async () => {
      try {
        const updatedPost = await patchLike(postId, postUserId, token);
        dispatch(setPost({ post: updatedPost }));
      } catch (error) {
        console.error("Error in liking/unliking post:", error);
      }
    };
  };
  // return <div>PostWidget</div>;
};

export default PostWidget;
