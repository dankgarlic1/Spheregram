import { useDispatch, useSelector } from "react-redux";
import { Box, Typography, useTheme } from "@mui/material";
import {} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { setFriends } from "../state";
import React from "react";
import { addOrRemoveFriends } from "../helper/api-communicator";
import WidgetWrapper from "../components/WidgetWrapper";
import FlexBetween from "../components/FlexBetween";
import UserImage from "../components/UserImage";

const Friend = ({ friendId, name, subtitle, userPicturePath }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { _id } = useSelector((state) => state.user);
  const token = useSelector((state) => state.token);
  const friends = useSelector((state) => state.friends);
  const { palette } = useTheme();
  const primaryLight = palette.primary.light;
  const primaryDark = palette.primary.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  const isFriend = friends.find((friend) => friend._id === friendId);
  const patchFriend = async () => {
    const res = await addOrRemoveFriends(_id, friendId, token);
    dispatch(setFriends({ friends: res }));
  };

  return (
    <FlexBetween>
      <FlexBetween gap="1rem">
        <UserImage image={userPicturePath} size="55px" />
        <Box
          onClick={() => {
            navigate(`/profile/${friendId}`);
            navigate(0); //refresh
          }}
        >
          <Typography></Typography>
        </Box>
      </FlexBetween>
    </FlexBetween>
  );
};

export default Friend;
