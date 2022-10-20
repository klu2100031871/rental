import React from "react";
import './navbar.css';
import i from './Images/logo.jpg'
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import BasicMenu from "./DropDown";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(10),
    display: "flex",
  },
 logo: {
    flexGrow: "2",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(20),
    "&:hover": {
      color: "black",
      borderBottom: "1px solid white",
    },
  },
}));

function Navbar() {
  const classes = useStyles();

  return (
    <AppBar position= "static" color= 'primary' >
      <CssBaseline />
      <Toolbar>
      <img src={i} width="100" height="100"/>
        <Typography variant="h2" className="logo" align="center" >
        vRent
        </Typography>
          <div className={classes.navlinks}>
          
          <Link to="/SignIn" className={classes.link}>
             signin
            </Link>
            <Link to="/Apartment" className={classes.link}>
              Apartments
            </Link>
            <Link to="/Request" className={classes.link}>
              Request
            </Link>
            <Link to="/Pricing" className={classes.link}>
              Pricing
            </Link>
            <Link to="/Villa" className={classes.link}>
              villas
            </Link>
            <Link to="/ResponsiveAppBar" className={classes.link}>
              menu
            </Link>
            <Link to="/Form" className={classes.link}>
              Form
            </Link>
               <Link to="/AboutUs" className={classes.link}>
              About us
            </Link>
          </div>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;