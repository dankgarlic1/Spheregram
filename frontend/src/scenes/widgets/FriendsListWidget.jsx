import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setFriends } from "../../state";
import Friend from "../../components/Friend";
import WidgetWrapper from "../../components/WidgetWrapper";
import { getFriends } from "../../helper/api-communicator";
import FlexBetween from "../../components/FlexBetween";
import { Typography, useTheme, Box } from "@mui/material";

const FriendsListWidget = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { _id } = useSelector((state) => state.user);
  const token = useSelector((state) => state.token);
  const friends = useSelector((state) => state.user.friends);
  const { palette } = useTheme();

  const getAllFriends = async () => {
    const res = await getFriends(_id, token);
    dispatch(setFriends({ friends: res }));
  };

  useEffect(() => {
    getAllFriends();
  }, []);

  return (
    <WidgetWrapper>
      <Typography
        color={palette.neutral.dark}
        variant="h5"
        fontWeight="500"
        sx={{ mb: "1.5rem" }}
      >
        Friends List
      </Typography>
      <Box display="flex" flexDirection="column" gap="1.5rem">
        {friends.map((friend) => (
          <Friend
            key={friend._id}
            friendId={friend._id}
            name={`${friend.firstName} ${friend.lastName}`}
            subtitle={friend.occupation}
            userPicturePath={friend.picturePath}
          />
        ))}
      </Box>
    </WidgetWrapper>
  );
};

export default FriendsListWidget;
