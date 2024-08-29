import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  InputBase,
  useMediaQuery,
  useTheme,
  Typography,
  IconButton,
  Divider,
  Button,
} from "@mui/material";
import {
  AttachFileOutlined,
  DeleteOutline,
  DeleteOutlineOutlined,
  EditOutlined,
  GifBoxOutlined,
  ImageOutlined,
  MicOutlined,
  MoreHorizOutlined,
} from "@mui/icons-material";
import { createPost } from "../../helper/api-communicator";
import { setPosts } from "../../state";
import WidgetWrapper from "../../components/WidgetWrapper";
import FlexBetween from "../../components/FlexBetween";
import UserImage from "../../components/UserImage";
import Dropzone from "react-dropzone";

const MyPostWidget = ({ picturePath }) => {
  const dispatch = useDispatch();
  const [isImage, setIsImage] = useState(false);
  const [image, setImage] = useState(null);
  const [post, setPost] = useState("");
  const { palette } = useTheme();
  const { _id } = useSelector((state) => state.user);
  const token = useSelector((state) => state.token);
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const mediumMain = palette.neutral.mediumMain;
  const medium = palette.neutral.medium;

  const handleCreatePost = async () => {
    try {
      const res = await createPost(_id, post, image, token);
      dispatch(setPosts({ res }));
      // Reset
      setImage(null);
      setPost("");
    } catch (error) {
      console.error("Failed to create post:", error);
    }
  };
  return (
    <WidgetWrapper>
      <FlexBetween>
        <UserImage image={picturePath} />
        <InputBase
          placeholder="What's on your mind..."
          onChange={(e) => setPost(e.target.value)}
          value={post}
          sx={{
            width: "100%",
            backgroundColor: palette.neutral.light,
            borderRadius: "2rem",
            height: "2.5rem",
            marginLeft: "0.7rem",
            padding: "1rem 1.5rem",
          }}
        />
      </FlexBetween>
      {isImage && (
        <Box
          borderRadius="5px"
          border={`1px solid ${medium}`}
          mt="1rem"
          p="1rem"
        >
          <Dropzone
            acceptedFiles=".jpg,.jpeg,.png"
            multiple={false}
            onDrop={(acceptedFiles) => {
              setImage(acceptedFiles[0]);
            }}
          >
            {({ getRootProps, getInputProps }) => (
              <FlexBetween>
                <Box
                  {...getRootProps()}
                  border={`2px dashed ${palette.primary.main}`}
                  p="1rem"
                  sx={{
                    "&:hover": { cursor: "pointer" },
                    width: "100%",
                  }}
                >
                  <input {...getInputProps()} />
                  {!image ? (
                    <p>Add Image</p>
                  ) : (
                    <FlexBetween>
                      <Typography>{image.name}</Typography>
                      <EditOutlined />
                    </FlexBetween>
                  )}
                </Box>
                <IconButton
                  onClick={() => setImage(null)}
                  sx={{ width: "15%" }}
                >
                  <DeleteOutlineOutlined />
                </IconButton>
              </FlexBetween>
            )}
          </Dropzone>
        </Box>
      )}
      <Divider sx={{ margin: "1.25rem 0" }} />
      <FlexBetween>
        <FlexBetween gap="0.25rem" onClick={() => setIsImage(!isImage)}>
          <ImageOutlined sx={{ "&:hover": { color: mediumMain } }} />
          <Typography
            color={mediumMain}
            sx={{
              "&:hover": { cursor: "pointer", color: mediumMain },
            }}
          >
            Image
          </Typography>
        </FlexBetween>
        {isNonMobileScreens ? (
          <>
            <FlexBetween gap="0.25rem">
              <GifBoxOutlined
                sx={{
                  "&:hover": { color: mediumMain },
                }}
              />
              <Typography color={mediumMain}>Clip</Typography>
            </FlexBetween>
            <FlexBetween gap="0.25rem">
              <AttachFileOutlined
                sx={{
                  "&:hover": { color: mediumMain },
                }}
              />
              <Typography color={mediumMain}>Attachment</Typography>
            </FlexBetween>{" "}
            <FlexBetween gap="0.25rem">
              <MicOutlined
                sx={{
                  "&:hover": { color: mediumMain },
                }}
              />
              <Typography color={mediumMain}>Audio</Typography>
            </FlexBetween>
          </>
        ) : (
          <>
            <MoreHorizOutlined sx={{ color: mediumMain }} />
          </>
        )}
        <Button
          disabled={!post}
          onClick={handleCreatePost}
          sx={{
            color: palette.background.alt,
            backgroundColor: palette.primary.main,
            borderRadius: "3rem",
          }}
        >
          POST
        </Button>
      </FlexBetween>
    </WidgetWrapper>
  );
};
export default MyPostWidget;
