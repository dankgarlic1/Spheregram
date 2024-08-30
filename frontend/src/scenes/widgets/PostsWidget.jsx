import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "../../state/index";
import { getAllPosts, getUserPosts } from "../../helper/api-communicator";
import PostWidget from "./PostWidget";

const PostsWidget = ({ userId, isProfile = false }) => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  const token = useSelector((state) => state.token);

  const fetchAllPosts = async () => {
    try {
      const res = await getAllPosts(token);
      // Sort posts by `createdAt` in descending order
      const sortedPosts = res.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
      dispatch(setPosts({ posts: sortedPosts }));
    } catch (error) {
      console.error("Error fetching all posts:", error);
    }
  };
  const fetchUserPosts = async () => {
    try {
      const res = await getUserPosts(userId, token);
      const sortedPosts = res.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );

      dispatch(setPosts({ posts: sortedPosts }));
    } catch (error) {
      console.error("Error fetching user's posts:", error);
    }
  };
  // useEffect(() => {
  //   if (isProfile) {
  //     fetchUserPosts();
  //   } else {
  //     fetchAllPosts();
  //   }
  // }, []);
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (isProfile) {
        fetchUserPosts();
      } else {
        fetchAllPosts();
      }
    }, 5000); // Poll every 5 seconds

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  return (
    <>
      {posts?.map(
        ({
          _id,
          userId,
          firstName,
          lastName,
          description,
          location,
          userPicturePath,
          picturePath,
          likes,
          comments,
          createdAt,
        }) => (
          <PostWidget
            key={_id}
            postId={_id}
            postUserId={userId}
            name={`${firstName} ${lastName}`}
            description={description}
            location={location}
            userPicturePath={userPicturePath}
            picturePath={picturePath}
            likes={likes}
            comments={comments}
          />
        )
      )}
    </>
  );
};

export default PostsWidget;
