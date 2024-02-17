import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import { Chip, Grid, Stack, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import CategoryIcon from "@mui/icons-material/Category";
import InfoIcon from "@mui/icons-material/Info";
import { useNavigate } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import SearchButon from "../SearchButon";
import { ThemeProvider, createTheme } from "@mui/material/styles";
export default function HeaderXS() {
  const navigate = useNavigate();
  const [state, setState] = React.useState({
    left: false,
  });
  const handleSingIn = () => {
    navigate("/inscription");
  };
  const theme = createTheme({
    shape: {
      borderRadius: 8,
    },
  });
  const toggleDrawer = (anchor, open, route) => () => {
    if (open) {
      navigate(route);
    }
    setState({ ...state, [anchor]: open });
  };
  const [bgColor, setBgColor] = React.useState("transparent");

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;

      if (scrollTop === 0) {
        setBgColor("transparent");
      } else {
        setBgColor("#000000");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 200 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Grid container justifyContent={"center"} my={2}>
        <Button onClick={handleSingIn}>
          <Chip
            label="S'inscrit"
            variant="filled"
            sx={{
              backgroundImage:
                "linear-gradient(120deg, #EBCC24 50%, #95c732 50%)",
            }}
            icon={
              <PersonIcon
                style={{
                  border: "2px solid grey",
                  borderRadius: "50%",
                  background: "white",
                }}
              />
            }
            style={{ backgroundColor: "#EBCC24" }}
          />
        </Button>
      </Grid>
      <Divider />
      <List>
        {["Acceuil", "Produits", "Apropos"].map((text, index) => (
          <>
            <ListItem key={text} disablePadding>
              <ListItemButton
                onClick={toggleDrawer(
                  anchor,
                  true,
                  text === "Acceuil"
                    ? "/"
                    : text === "Produits"
                    ? "/produit"
                    : text === "Apropos"
                    ? "/apropos"
                    : ""
                )}
              >
                <ListItemIcon>
                  {text === "Acceuil" ? (
                    <HomeIcon />
                  ) : text === "Produits" ? (
                    <CategoryIcon />
                  ) : text === "Apropos" ? (
                    <InfoIcon />
                  ) : null}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          </>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Grid
        borderTop={"4px solid #EBCC24"}
        // p={1}
        container
        justifyContent={"space-between"}
        alignItems={"center"}
        bgcolor={bgColor}
        // sx={{ border: "red solid 2px" }}
        // bgcolor={"black"}
        // px={5}
        style={{
          position: "fixed",
          zIndex: 999,
        }}
      >
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"center"}
          // sx={{ border: "green solid 2px" }}
        >
          {" "}
          {["left"].map((anchor) => (
            <React.Fragment key={anchor}>
              <Button
                style={{ color: "#EBCC24" }}
                onClick={toggleDrawer(anchor, true)}
              >
                {<MenuIcon fontSize="large" />}
              </Button>
              <Drawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
              >
                {list(anchor)}
              </Drawer>
            </React.Fragment>
          ))}
          <Stack
            direction={"row"}
            // mr={6}
            alignItems={"center"}
            // border={"white 2px solid"}
            p={0.5}
            my={1}
            borderRadius={2}
          >
            {<HomeWorkIcon sx={{ fontSize: "5vh", color: "white" }} />}
            <Typography
              variant="h4"
              color={"white"}
              fontFamily={"monospace "}
              style={{ fontStyle: "italic" }}
            >
              Lowe's
            </Typography>
          </Stack>
        </Stack>
        <Grid item xs={4} mr={2}>
          <ThemeProvider theme={theme}>
            <SearchButon />
          </ThemeProvider>
        </Grid>
      </Grid>
    </>
  );
}
