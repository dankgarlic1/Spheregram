import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import WidgetWrapper from "../../components/WidgetWrapper";
import FlexBetween from "../../components/FlexBetween";
import UserImage from "../../components/UserImage";
import {} from "../../state";
import { useTheme } from "@mui/material";
import {} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import Friend from "../../components/Friend";

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
    const { palette } = useTheme();
    const primaryLight = palette.primary.light;
    const primaryDark = palette.primary.dark;
    const main = palette.neutral.main;
    const medium = palette.neutral.medium;
  };
  // return <div>PostWidget</div>;
};

export default PostWidget;
