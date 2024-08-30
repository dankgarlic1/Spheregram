import { useDispatch, useSelector } from "react-redux";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { PersonAddOutlined, PersonRemoveOutlined } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { setFriends } from "../state";
import React from "react";
import { addOrRemoveFriends } from "../helper/api-communicator";
import FlexBetween from "../components/FlexBetween";
import UserImage from "../components/UserImage";

const Friend = ({ friendId, name, subtitle, userPicturePath }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { _id } = useSelector((state) => state.user);
  const token = useSelector((state) => state.token);
  const friends = useSelector((state) => state.user.friends);
  const { palette } = useTheme();
  const primaryLight = palette.primary.light;
  const primaryDark = palette.primary.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;
  console.log(token);

  const isFriend = friends?.find((friend) => friend._id === friendId);
  const patchFriend = async () => {
    console.log("entered patchfriend");

    const res = await addOrRemoveFriends(_id, friendId, token);
    console.log("called api");
    console.log(res);

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
          <Typography
            sx={{
              color: { main },
              variant: "h5",
              fontWeight: "500",
              "&:hover": {
                color: palette.primary.light,
                cursor: "pointer",
              },
            }}
          >
            {name}
            <Typography color={medium} fontSize="0.75rem">
              {subtitle}
            </Typography>
          </Typography>
        </Box>
      </FlexBetween>
      <IconButton
        onClick={() => patchFriend()}
        sx={{
          backgroundColor: primaryLight,
          p: "0.6",
        }}
      >
        {isFriend ? (
          <PersonRemoveOutlined sx={{ color: primaryDark }} />
        ) : (
          <PersonAddOutlined sx={{ color: primaryDark }} />
        )}
      </IconButton>
    </FlexBetween>
  );
};

export default Friend;
