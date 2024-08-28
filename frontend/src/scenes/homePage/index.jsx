import { Box } from "@mui/material";
import { Navbar } from "../navbar";
import UserWidget from "../widgets/UserWidget";

export const HomePage = () => {
  // return <div>Home page</div>;
  return (
    <Box>
      <Navbar />
      <UserWidget userId="66cea2734edd3056fb4f1d8f" picturePath="best.jpg" />
    </Box>
  );
};
