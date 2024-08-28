import axios from "axios";
import { setLogin } from "../state";

export const register = async (values, onSubmitProps, setPageType) => {
  const formData = new FormData(); //usually I would have used body only, but since we have a picture I have to use FormData
  for (let value in values) {
    formData.append(value, values[value]);
  }
  formData.append("picturePath", values.picture.name);

  try {
    const response = await axios.post(
      "http://localhost:3001/auth/register",
      formData
    );
    const savedUser = response.data;

    onSubmitProps.resetForm();

    if (savedUser) {
      setPageType("login");
    }
  } catch (error) {
    console.error("Error registering user:", error);
  }
};

export const login = async (values, onSubmitProps, dispatch, navigate) => {
  try {
    const response = await axios.post(
      "http://localhost:3001/auth/login",
      values
    );

    const loggedInUser = response.data;
    onSubmitProps.resetForm();

    if (loggedInUser) {
      dispatch(
        setLogin({
          user: loggedInUser.user,
          token: loggedInUser.token,
        })
      );
      navigate("/home");
    }
  } catch (error) {
    console.log("Error logging in:", error);
  }
};

export const getUser = async (id, setUser, token) => {
  try {
    const res = await axios.get(`http://localhost:3001/user/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const user = res.data.user;
    if (user) {
      setUser(user);
    }
  } catch (error) {
    console.error("Error fetching user:", error);
  }
};
