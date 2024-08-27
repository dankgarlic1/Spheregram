import React, { useState } from "react";
import { Formik } from "formik";
import Dropzone from "react-dropzone";
import * as yup from "yup";
import { useTheme } from "@emotion/react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Box, TextField, useMediaQuery } from "@mui/material";
const registerSchema = yup.object().shape({
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  email: yup.string().email("Invalid Email").required("required"),
  password: yup.string().required("required"),
  location: yup.string().required("required"),
  occupation: yup.string().required("required"),
  picture: yup.string().required("required"),
});

const loginSchema = yup.object().shape({
  email: yup.string().email("Invalid Email").required("required"),
  password: yup.string().required("required"),
});

const initialValuesRegister = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  location: "",
  occupation: "",
  picture: "",
};
const initialValuesLogin = {
  email: "",
  password: "",
};

const Form = () => {
  const [pageType, setPageType] = useState("login"); //for switching register,login
  const { pallete } = useTheme();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isNonMobileScreens = useMediaQuery("(min-width:600px)");
  const isLogin = pageType === "login";
  const isRegister = pageType === "register";
  const handleSubmit = async (values, onSubmitProps) => {};
  return (
    <div>
      <Formik
        onSubmit={handleSubmit}
        initialValues={isLogin ? initialValuesLogin : initialValuesRegister}
        validationSchema={isLogin ? loginSchema : registerSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
          setFieldValue,
          resetForm,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4,minmax(0,1fr))"
              sx={{
                "& > div": {
                  gridColumn: isNonMobileScreens ? undefined : "span 4",
                },
              }}
            >
              {isRegister && (
                <>
                  <TextField
                    label="First Name"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    name="firstName"
                    error={
                      Boolean(touched.firstName) && Boolean(errors.firstName)
                    }
                    helperText={touched.firstName && errors.firstName}
                    sx={{
                      gridColumn: "span 2",
                    }}
                  />
                  <TextField
                    label="Last Name"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    name="lastName"
                    error={
                      Boolean(touched.lastName) && Boolean(errors.lastName)
                    }
                    helperText={touched.lastName && errors.lastName}
                    sx={{
                      gridColumn: "span 2",
                    }}
                  />
                  <TextField
                    label="Location"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    name="location"
                    error={
                      Boolean(touched.location) && Boolean(errors.location)
                    }
                    helperText={touched.location && errors.location}
                    sx={{
                      gridColumn: "span 4",
                    }}
                  />
                  <TextField
                    label="Occupation"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    name="occupation"
                    error={
                      Boolean(touched.occupation) && Boolean(errors.occupation)
                    }
                    helperText={touched.occupation && errors.occupation}
                    sx={{
                      gridColumn: "span 4",
                    }}
                  />
                  <Box
                    gridColumn="span 4"
                    border={`1px solid ${pallete.neutral.medium}`}
                    borderRadius="5px"
                    p="1rem"
                  >
                    <Dropzone
                      acceptedFiles=".jpg,.jpeg,.png"
                      multiple={false}
                      onDrop={(acceptedFiles) => {
                        setFieldValue("picture", acceptedFiles[0]);
                      }}
                    ></Dropzone>
                  </Box>
                </>
              )}
            </Box>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Form;
