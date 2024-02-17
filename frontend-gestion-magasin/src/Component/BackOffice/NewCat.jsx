import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import {
  Button,
  Divider,
  Grid,
  IconButton,
  InputAdornment,
  Link,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import axios from "axios";
// import Waiter from "./Waiter";
// import StateNotification from "./Notification";
const validationSchema = yup.object({
  newCat: yup.string("Veuillez entrer votre adresse e-mail"),
  // .required(`'L'adresse e-mail est obligatoire'`),
});
function NewCat() {
  //   const [showErrorDialog, setShowErrorDialog] = useState(false);
  const navigate = useNavigate();
  //   const [isLoading, setLoading] = useState(true);

  const submitFormData = async (values) => {
    console.log("Submitting form data model");
    const formData = new FormData();

    formData.append("name", values.newCat);
    // formData.append('password', values.password);

    const object = {};
    formData.forEach((value, key) => {
      object[key] = value;
    });
    console.log(JSON.stringify(object));

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:8000/api/category/crup",
      headers: {
        "Content-Type": "application/json",
      },
      data: formData,
    };

    await axios
      .request(config)
      .then((response) => {
        console.log("Tafiditra ny new cat");
        console.log(response);
        // navigate('/');
        // setLoading(true);
      })
      .catch((error) => {
        console.log("Tsy tafiditra ny new cat");
        console.error(error);
        // setShowErrorDialog(true);
        // setLoading(true);
      });
  };
  const formik = useFormik({
    initialValues: {
      newCat: "",
      //   password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      submitFormData(values);
      console.log(JSON.stringify(values, null, 2));
      //   setLoading(false)
    },
  });
  const handlePrev = () => {
    navigate("/inscription");
  };
  const handleCloseErrorDialog = () => {
    // setShowErrorDialog(false);
  };
  return (
    <>
      {/* <Waiter loadingState={!isLoading} /> */}{" "}
      <form onSubmit={formik.handleSubmit}>
        <Grid
          container
          justifyContent={"space-around"}
          alignItems={"center"}
          //   border={"red solid 2px"}
        >
          <Grid item xs={6} alignItems={"center"}>
            <TextField
              //   sx={{ mt: 4 }}
              fullWidth
              id="standard-multiline-flexible"
              multiline
              variant="standard"
              name="newCat"
              label="New Categories"
              value={formik.values.newCat}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.newCat && Boolean(formik.errors.newCat)}
              helperText={formik.touched.newCat && formik.errors.newCat}
            />
          </Grid>
          <Grid item xs={4}>
            <Button
              fullWidth
              variant="contained"
              type="submit"
              sx={{
                maxHeight: "7vh",
                bgcolor: "#EBCC24",
              }}
            >
              Valider
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
}

export default NewCat;
