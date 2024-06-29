import React from 'react'
import { Box, Container, Grid, Typography, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import logo from "../../assets/luman_logo.png";
import PhoneIcon from "@mui/icons-material/Phone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { FaEnvelope, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const navItems = [
    { title: "About Us", path: "/about" },
    { title: "Products", path: "/products" },
    { title: "Contact", path: "/contact" },
  ];

  return (
    <Box>
      <Box sx={{ bgcolor: "white", color: "black", p: 3 }}>
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={3}>
              <img src={logo} alt="Company Logo" width="120" height="50" />
              <Typography
                variant="body1"
                style={{
                  fontFamily: "Outfit, sans-serif",
                  fontSize: "14px",
                  marginTop: "10px",
                  display: "flex",
                  textAlign: "justify",
                }}
              >
                Believe in win-win <br /> sustainable business relationship
              </Typography>
              <div className="flex justify-start">
                <IconButton color="inherit">
                  <FacebookIcon />
                </IconButton>
                <IconButton color="inherit">
                  <TwitterIcon />
                </IconButton>
                <IconButton color="inherit">
                  <LinkedInIcon />
                </IconButton>
                <IconButton color="inherit">
                  <InstagramIcon />
                </IconButton>
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              sm={3}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                padding: "10px 0px 0px 80px",
              }}
            >
              <Typography
                variant="h6"
                style={{ fontFamily: "Lato, sans-serif", fontSize: "18px" }}
              >
                Quick Links
              </Typography>
              <span
                style={{
                  fontFamily: "Roboto, sans-serif",
                  fontSize: "14px",
                  color: "#000000",
                }}
              >
                ________
              </span>
              {navItems.map((item) => (
                <Link
                  key={item.title}
                  to={item.path}
                  style={{
                    display: "block",
                    marginBottom: "5px",
                    textDecoration: "none",
                    fontFamily: "Roboto, sans-serif",
                    fontSize: "14px",
                    marginTop: "15px",
                  }}
                  className="hover:text-green-600"
                >
                  {item.title}
                </Link>
              ))}
            </Grid>
            <Grid item xs={12} sm={3} className="get-touch">
              <Typography
                variant="h6"
                style={{ fontFamily: "Roboto, sans-serif", fontSize: "18px" }}
              >
                Get In Touch
              </Typography>
              <span
                style={{
                  fontFamily: "Roboto, sans-serif",
                  fontSize: "14px",
                  color: "#000000",
                }}
              >
                ________
              </span>{" "}
              <br />
              <Typography
                variant="body2"
                style={{
                  fontFamily: "Roboto, sans-serif",
                  fontSize: "14px",
                  color: "#000000",
                  marginTop: "20px",
                }}
              >
                <a href="https://api.whatsapp.com/send?phone=8801916231759" className="hover:text-green-600">
                  <FaWhatsapp
                    style={{ display: "inline", color: "#00a850e6" }}
                  />{" "}
                  +8801916231759
                </a>
              </Typography>
              <Typography
                variant="body2"
                style={{
                  fontFamily: "Roboto, sans-serif",
                  fontSize: "14px",
                  color: "#000000",
                  marginTop: "10px",
                }}
              >
                <a href="https://api.whatsapp.com/send?phone=8801925425497" className="hover:text-green-600">
                  <FaWhatsapp
                    style={{ display: "inline", color: "#00a850e6" }}
                  />{" "}
                  +8801925425497
                </a>
              </Typography>
              <Typography
                variant="body2"
                style={{
                  fontFamily: "Roboto, sans-serif",
                  fontSize: "14px",
                  color: "#000000",
                  marginTop: "10px",
                }}
              >
                <a href="mailto:mktg@lumen-bd.com" className="hover:text-green-600">
                  <FaEnvelope
                    style={{ display: "inline", color: "#00a850e6" }}
                  />{" "}
                  mktg@lumen-bd.com
                </a>
              </Typography>
            </Grid>

            <Grid item xs={12} sm={3} className="location">
              <Typography
                variant="h6"
                style={{ fontFamily: "Roboto, sans-serif", fontSize: "18px" }}
              >
                Location
              </Typography>
              <span
                style={{
                  fontFamily: "Roboto, sans-serif",
                  fontSize: "14px",
                  color: "#000000",
                }}
              >
                ________
              </span>{" "}
              <br />
              <div>
                <Typography
                  variant="body2"
                  style={{
                    fontFamily: "Roboto, sans-serif",
                    fontSize: "14px",
                    color: "#000000",
                    marginTop: "8px",
                  }}
                >
                  <LocationOnIcon
                    style={{
                      marginRight: "5px",
                      textAlign: "center",
                      marginBottom: "3px",
                      marginTop: "2px",
                    }}
                  />{" "}
                  Address: <br /> <b>Lumen Corporation</b> &nbsp;
                  <br /> House-07, Road-06, Sector-12, Uttara, Dhaka-1230,
                  Bangladesh.
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <div className="bg-green-700 bg-opacity-90 p-5">
        <div className="container mx-auto flex flex-col md:flex-row items-center md:justify-between">
          <div className="mb-4 md:mb-0 md:mr-auto">
            <p className="text-white text-sm">
              &copy; 2024 All rights reserved - Lumen Corporation
            </p>
          </div>
          <div className="md:ml-auto">
            <a href="#" className="text-white text-sm hover:text-gray-300">
              Developed with ❤️ Goinnovior Limited
            </a>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default Footer;
